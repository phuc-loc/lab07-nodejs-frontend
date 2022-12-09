import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Shop from './ShopComponent';
import AddProduct from './AddProductComponent';
import Cart from './CartComponent';
import Header from './HeaderComponent';
import Edit from "./EditComponent";
import Products from "./ProductsComponent";
import Orders from "./OrdersComponent";
import { fetchProducts, fetchCart, fetchOrders
    // postProduct 
} from "../redux/ActionCreator";

const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        products: state.products,
        cart: state.cart,
        orders: state.orders
    }
}
  

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch( fetchProducts() ),
    fetchCart: () => dispatch( fetchCart() ),
    fetchOrders: () => dispatch(fetchOrders())
    // postProduct: (productId, title, , price, description) => dispatch(postProduct(productId, title, , price, description))
})

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() { 
        this.props.fetchProducts();
        this.props.fetchCart();
        this.props.fetchOrders();
    }

    render() {

        const ProductWithId = ( {match} ) => {
            // console.log('1',match.params.id);
            // console.log('2',this.props.products.products)
            // console.log('3 product', this.props.products.products.filter(p => p._id ===  match.params.id )[0])
            return (
                <Edit
                //chỉ lấy 1 product
                 product = {this.props.products.products.filter(p => p._id ===  match.params.id )[0]} 
                 isLoading={this.props.products.isLoading}
                 errMess={this.props.products.errMess} 
                //  postProduct={this.props.postProduct}
                 />
            )
        }
        console.log('//main',this.props.cart); 
        return (
            <div> 
                <Header />
                <Switch>
                    <Route path="/shop" component = { () => <Shop products={this.props.products.products} />} />
                    <Route path="/add-product" component={AddProduct} />
                    <Route path="/cart" component={ () => <Cart cart = {this.props.cart.cart} />} />
                    <Route path="/products" component = { () => <Products products={this.props.products.products} />} />
                    <Route path="/edit/:id" component={ProductWithId } />
                    <Route path="/orders" component={() => <Orders orders = {this.props.orders.orders} /> } />
                </Switch>
            </div> 
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
