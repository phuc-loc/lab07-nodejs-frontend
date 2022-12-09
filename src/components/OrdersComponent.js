import React from "react";


function Orders(props) {
    console.log('//props in OrderComponent', props)
    const list = props.orders.map(order => {
        return (
            <ul>
                <h1>#{order._id}</h1>
                <ul>
                    {order.products.map(p => {
                        return (
                            <li>{p.product.title} ( {p.quantity} )</li>
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