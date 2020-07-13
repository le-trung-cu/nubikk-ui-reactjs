import React, { useEffect } from 'react'
import { useState } from 'react'
import checkoutServices from '../../services/checkout.services';
import { connect } from 'react-redux';
import OrderDetail from '../../components/order-detail/order-detail.component';

const OrderPage = ({ user }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            checkoutServices.getOrders().then(data => {
                console.log(data)
                setOrders(data)
            })
        }
    }, []);

    return (
        <div className="order-page">
            {orders?.map((order, index) => <OrderDetail key={index} order={order} items={order.orderItems} />)}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps)(OrderPage)
