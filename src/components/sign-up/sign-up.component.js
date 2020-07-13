import React, { Component } from 'react'
import Button from '../button/button.component'
import checkoutServices from '../../services/checkout.services'
import Input from '../input/input.component'

import './sign-up.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import userServices from '../../services/user.services'
import { clearCart } from '../../redux/cart/cart.actions'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            zipcode: '',
            street: '',
            city: '',
            country: '',
            email: '',
            password: '',
            signupOption: false

        }
    }

    handlerSignUpAndCheckoutSubmit = (e) => {
        e.preventDefault();
        const shipToAddress = {
            zipCode: this.state.zipcode,
            street: this.state.street,
            city: this.state.city,
            country: this.state.country,
        };

        const items = this.props.cartItems.map(({ productId, quantity, size, color }) =>
            ({ productId, quantity, size, color }));

        const order = {
            shipToAddress,
            email: this.state.email,
            password: this.state.password,
            signUpOption: this.state.signupOption,
            items
        }

        checkoutServices.checkoutWithNewUser(order, this.state.signupOption)
            .then(({ user }) => {
                if (this.state.signupOption && user) {
                    userServices.user = user;
                }
                this.props.clearCart()
                this.props.history.push('/orders')
            })
    }

    handlerInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const state = {}
        state[name] = value
        this.setState(state)
    }

    handlerInputSignUpOtionChange = () => {
        this.setState({ signupOption: !this.state.signupOption })
    }

    render() {
        return (
            <div className="sign-up">
                <form action="POST" onSubmit={this.handlerSignUpAndCheckoutSubmit}>

                    <Input type="text" label="Zipcode"
                        value={this.state.zipcode}
                        onChange={this.handlerInputChange}
                        name="zipcode" required id="zipcode" />

                    <Input type="text" label="Street"
                        value={this.state.street}
                        onChange={this.handlerInputChange}
                        name="street" required id="street" />

                    <Input type="text" label="City"
                        value={this.state.city}
                        onChange={this.handlerInputChange}
                        name="city" required id="city" />

                    <Input type="text" label="Country"
                        value={this.state.country}
                        onChange={this.handlerInputChange}
                        name="country" required id="country" />
                    <Input type="text" label="Email"
                        value={this.state.email}
                        onChange={this.handlerInputChange}
                        name="email" required id="email" />
                    <label className="sign-up__option">
                        <input type="checkbox"
                            value={this.state.signupOption}
                            onChange={this.handlerInputSignUpOtionChange}
                            name="signupOption" id="signupOption" />
                        <span>do you want create an account</span>
                    </label>
                    <div className={`${this.state.signupOption ? 'show ' : ''}sign-up__password`}>
                        <Input type="password" label="Password"
                            value={this.state.password}
                            required={this.state.signupOption ? true : false}
                            onChange={this.handlerInputChange}
                            name="password" id="password" />
                    </div>


                    <div className="input-group margin-top-10">
                        <Button className="btn--main">Continue</Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))
