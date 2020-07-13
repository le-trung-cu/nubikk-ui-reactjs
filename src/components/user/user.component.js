import React, { Fragment } from 'react'
import { BsPerson, BsPersonCheck } from 'react-icons/bs'
import { connect } from 'react-redux'
import Button from '../button/button.component'
import { useState } from 'react'
import './user.styles.scss'
import userServices from '../../services/user.services'
import { clearCart } from '../../redux/cart/cart.actions'
import { useHistory } from 'react-router-dom'

const User = ({ user, clearCart }) => {
    const [hiddenUserInfo, setHiddenUserInfo] = useState(true)
    const history = useHistory();
    return (
        <div className="user"
            onMouseEnter={() => setHiddenUserInfo(false)}
            onMouseLeave={() => setHiddenUserInfo(true)}>
            <span className="user__icon">
                {user ? <BsPersonCheck /> : <BsPerson />}
                {hiddenUserInfo ? null
                    : <div className="user__info--wrap">
                        < div className="user__info">
                            {user ?
                                <Fragment>
                                    <h6 className="user__name">{user.email}</h6>
                                    <Button onClick={() => {
                                        userServices.signOut();
                                        clearCart();
                                    }}>Sign out</Button>
                                </Fragment>
                                : <Fragment>
                                    <Button onClick={() => history.push('/sign-in')}>Sign in</Button>
                                </Fragment>
                            }
                        </div>
                    </div>
                }
            </span>

        </div >
    )
}

const mapStateToProps = state => ({
    user: state.user.user
})

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})


export default connect(mapStateToProps, mapDispatchToProps)(User)
