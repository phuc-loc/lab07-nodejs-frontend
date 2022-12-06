import React from "react";


function Orders(props) {
    console.log('//props', props)
    const list = props.orders.map(order => {
        return (
            <ul>
                <h1>#{order._id}</h1>
                <ul>
                    {order.items.map(product => {
                        return (
                            <li>{product.title} ( {product.quantity} )</li>
                        )
                    })}
                </ul>
            </ul>
        )
    })
    return (
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default Orders;