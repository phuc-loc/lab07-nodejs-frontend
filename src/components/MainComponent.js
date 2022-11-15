import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Shop from './ShopComponent';
import AddProduct from './AddProductComponent';
import Cart from './CartComponent';
import Header from './HeaderComponent';
import Edit from "./EditComponent";
import Products from "./ProductsComponent";
import { fetchProducts, fetchCart,  
    // postProduct 
} from "../redux/ActionCreator";

const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        products: state.products,
        cart: state.cart
    }
}
  

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch( fetchProducts() ),
    fetchCart: () => dispatch( fetchCart() ),
    // postProduct: (productId, title, imageurl, price, description) => dispatch(postProduct(productId, title, imageurl, price, description))
})

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() { 
        this.props.fetchProducts();
        this.props.fetchCart();
    }

    render() {

        const ProductWithId = ( {match} ) => {
            return (
                <Edit
                //chỉ lấy 1 product
                 product = {this.props.products.products.filter(p => p.id === match.params.id )[0]} 
                 isLoading={this.props.products.isLoading}
                 errMess={this.props.products.errMess} 
                //  postProduct={this.props.postProduct}
                 />
            )
        }
        // console.log(this.props.products.products);
        return (
            <div> 
                <Header />
                <Switch>
                    <Route path="/shop" component = { () => <Shop products={this.props.products.products} />} />
                    <Route path="/add-product" component={AddProduct} />
                    <Route path="/cart" component={ () => <Cart cart = {this.props.cart.cart} />} />
                    <Route path="/products" component = { () => <Products products={this.props.products.products} />} />
                    <Route path="/edit/:id" component={ProductWithId } />
                </Switch>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
