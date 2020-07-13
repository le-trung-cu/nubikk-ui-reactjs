import React, { Component } from 'react'
import SignIn from '../../components/sign-in/sign-in.component'

import './checkout.styles.scss'
import SignUp from '../../components/sign-up/sign-up.component'
import Button from '../../components/button/button.component'
import { connect } from 'react-redux'
import Input from '../../components/input/input.component'
import checkoutServices from '../../services/checkout.services'
import { withRouter } from 'react-router-dom'
import { clearCart } from '../../redux/cart/cart.actions'

class CheckoutPage extends Component {
    constructor(props) {
        super(props)
        const { zipCode = '', street = '', city = '', country = '' } = this.props.user?.address ?? {};

        this.state = {
            address: { zipCode, street, city, country },
            hiddenSignin: false
        }
    }

    handlerCheckoutSubmit = (e) => {
        e.preventDefault();
        const { zipCode, street, city, country } = this.state.address;
        checkoutServices.checkoutWithUserAuthenticated({ zipCode, street, city, country })
            .then(data => {
                if (data.ok) {
                    this.props.clearCart();
                    this.props.history.push('/orders')
                }
            })
    }

    handlerInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const state = {}
        state[name] = value
        this.setState(state)
    }

    render() {
        return (
            <div className="checkout-page">
                <h2 className="text-center">ADDRESS</h2>
                {this.props.user ?
                    <div className="checkout__wrap">
                        <form className="checkout-page__form" action="POST" onSubmit={this.handlerCheckoutSubmit}>

                            <Input type="text" label="Zipcode"
                                value={this.state.address.zipCode}
                                onChange={this.handlerInputChange}
                                name="zipCode" required id="zipCode" />

                            <Input type="text" label="Street"
                                value={this.state.address.street}
                                onChange={this.handlerInputChange}
                                name="street" required id="street" />

                            <Input type="text" label="City"
                                value={this.state.address.city}
                                onChange={this.handlerInputChange}
                                name="city" required id="city" />

                            <Input type="text" label="Country"
                                value={this.state.address.country}
                                onChange={this.handlerInputChange}
                                name="country" required id="country" />

                            <div className="input-group margin-top-10">
                                <Button className="btn--main">Continue</Button>
                            </div>
                        </form>
                    </div>
                    : <div className="checkout__wrap">
                        <section className="checkout__col">
                            <div className="checkout__from-heading">
                                <h6>I'M ALREADY A CUSTOMER.</h6>
                                <hr />
                                <p>Log in with your email address and password</p>
                            </div>
                            {!this.state.hiddenSignin ? <SignIn />
                                : <Button className="btn--main btn--background"
                                    onClick={() => this.setState({ hiddenSignin: false })}>Sign in</Button>}
                        </section>
                        <section className="checkout__col">
                            <div className="checkout__from-heading">
                                <h6>I'M A NEW CUSTOMER</h6>
                                <hr />
                                <p>Account is not required</p>
                            </div>
                            <hr />
                            {this.state.hiddenSignin ? <SignUp />
                                : <Button className="btn--main btn--background margin-top-10"
                                    onClick={() => this.setState({ hiddenSignin: true })}>Continue</Button>}
                        </section>
                    </div>
                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutPage))
