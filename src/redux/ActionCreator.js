import * as ActionTypes from './ActionType';

//1 fetch product
export const fetchProducts = () => (dispatch) => {

    dispatch(productsLoading(true));
    
    return fetch('http://localhost:5001/admin/add-product')
        .then(response => {
            if (response.ok) {
                // console.log('response', response);
                return response
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        // .then ( data => console.log('data', data))
        .then(products => {
            // console.log('products' , products);
            dispatch(addProducts(products));
        })
        .catch(error => dispatch(productsFailed(error.message)));

}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});



//2 fetch cart
export const fetchCart = () => (dispatch) => {
    dispatch(cartLoading(true));
    return fetch('http://localhost:5001/user/cart')
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;

        })
        .then(response => response.json())
        .then(cart => dispatch(addCart(cart)))
        .catch(error => dispatch(cartFailed(error.message)));
}

export const cartLoading = () => ({
    type: ActionTypes.CART_LOADING
});

export const addCart = (cart) => ({
    type: ActionTypes.ADD_CART,
    payload: cart
});


export const cartFailed = (errmess) => ({
    type: ActionTypes.CART_FAILED,
    payload: errmess
});


//edit product
// export const postProduct = (productId, title, imageurl, price, description) => (dispatch) => {

//     const newProduct = {
//         productId: productId,
//         title: title,
//         imageurl: imageurl,
//         price: price,
//         description: description 
//     }

//     return fetch( 'http://localhost:5001/admin/edit-product' ,{
//       method: 'POST',
//       body: JSON.stringify(newProduct),
//       headers: { "Content-Type": "application/json" },
//       credentials: "same-origin"
//     })
//     .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//       error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//         }  
//       )
//     .then(response => response.json())
//     .then(response => dispatch(addEditProduct(response)))
//     .catch(error => {
//       //  console.log('post feedback', error.message); 
//        alert('Your product could not be posted \nError: ' + error.message);
//     });
//   }

//   export const addEditProduct = (product) => ({
//       type: ActionTypes.EDIT_PRODUCT,
//       payload: product
//   })
