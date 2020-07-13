import React from 'react'
import './order-detail.styles.scss'

const Row = ({ pictureUri, productId, productName, size, colorName, unitPrice, units }) => (
    <tr>
        <td>
            <img src={pictureUri} alt="" />
        </td>
        <td>{productId}</td>
        <td>{productName}</td>
        <td>{size}</td>
        <td>{colorName}</td>
        <td>{unitPrice}</td>
        <td>{units}</td>
        <td>{unitPrice * units}</td>
    </tr>
)

const OrderDetail = ({ order, items = [] }) => {
    return (
        <div className="order-detail">
            <table className="order-detail__table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => <Row key={index} {...item} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7">SUBTOTAL</td>
                        <td>$ {items.reduce((preValue, current) =>
                            preValue + (current.unitPrice * current.units), 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default OrderDetail
