import React from "react";


function Orders(props) {
    console.log('//props', props)
    const list = props.orders.map(order => {
        return (
            <ul>
                <h1>#{order.id}</h1>
                <ul>
                    {order.products.map(product => {
                        return (
                            <li>{product.title} ( {product.orderItem.quantity} )</li>
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