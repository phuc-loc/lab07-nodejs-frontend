import React, { Component } from 'react';
import { Loading } from "./LoadingComponent";

class Cart extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        // console.log('cart-2', this.props.cart);

        const list = this.props.cart.map( (p) => { 

            // **Loading, errMess**
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4>{this.props.cart.errMess}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            else
            // **Loading, errMess**

                return (
                    <div>
                        <ul>
                            <li><p>{p.productData.title} ( {p.qty} )</p></li>
                        </ul>
                    </div>
                )
        })

        return (
            <div>
                {list}
            </div>
        )
    }

}

export default Cart;