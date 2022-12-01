import React, { Component } from 'react';
import { Loading } from "./LoadingComponent";
import { Form, Button, Input } from 'reactstrap';
class Cart extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmitOrder() {
        fetch('http://localhost:5001/user/create-order', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
        })
    }

    handleSubmitDelete(value) {
        const id = value.target.productId.value;
        console.log(id)
        fetch('http://localhost:5001/user/delete-cart-item', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        })
        // value.preventDefault();
    }

    render() {
        // console.log('//cart', this.props.cart);
        const list = this.props.cart.map((p) => {
            if (this.props.cart.isLoading) {
                return (
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (this.props.cart.errMess) {
                return (
                    <div className="col-12">
                        <h4>{this.props.cart.errMess}</h4>
                    </div>
                );
            }
            else

                return (
                    <div>
                        <ul>
                            {/* <li><p>{p.productData.title} ( {p.qty} )</p></li> */}
                            <li><p>{p.title} ( {p.cartItem.quantity} )</p></li>
                            <Form onSubmit={(value) => this.handleSubmitDelete(value)} >
                                <Input type="hidden" name="productId" value={p.id} />
                                <Button type="submit">Delete</Button>
                            </Form>
                        </ul>
                    </div>
                )
        })

        return (
            <div className="container">
                {list}
                <div className="container">
                    <Form onSubmit={this.handleSubmitOrder} >
                        <Button type="submit">Order now!</Button>
                    </Form>
                </div>
            </div>
        )
    }

}

export default Cart;