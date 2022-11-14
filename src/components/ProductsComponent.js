// import React, { Component } from "react";
// import { Card, CardImg, Button, CardText, CardBody, CardHeader, CardSubtitle, Form, Input } from 'reactstrap';
// import { Loading } from "./LoadingComponent";

// class Products extends Component {
    
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }


//     handleSubmit(value) {
//         const updateProduct = {
//             id : value.target.productId.value,
            
//         }
//         // console.log('id', id);
//         fetch('http://localhost:5001/user/cart', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify( {id: id} )
//         })
//     }


//     render() {

//         const list = this.props.products.map((product) => {

//             // **Loading, errMess** 
//             if (this.props.products.isLoading) {
//                 return(
//                     <div className="container">
//                         <div className="row">           
//                             <Loading />
//                         </div>
//                     </div>
//                 );
//             }
//             else if (this.props.products.errMess) {
//                 return(
//                     <div className="container">
//                         <div className="row"> 
//                             <div className="col-12">
//                                 <h4>{this.props.products.errMess}</h4>
//                             </div>
//                         </div> 
//                     </div>
//                 );
//             }
//             else
//             //


//             return (
//                 <div className="col-lg-4 ">
//                     <Card>
//                         <CardHeader>{product.title}</CardHeader>
//                         <CardBody>
//                             <CardImg src={product.imageurl} />
//                             <CardSubtitle>{product.price}</CardSubtitle>
//                             <CardText>{product.description}</CardText>
//                         </CardBody>
                        
//                         {/* Form 1 */}
//                         <Form onSubmit={(value) => this.handleSubmit(value) } >
//                             <Input type="hidden" name="productId" value={product.id} />
//                             <Button type="submit">Edit</Button>
//                         </Form>

//                         {/* Form 2 */}
//                         {/* <Form onSubmit={(value) => this.handleSubmitEdit(value) } >
//                             <Input type="hidden" name="productId" value={book.id} />
//                            <Button type="submit">Edit</Button>
//                         </Form>
//                         */}
                        
//                         {/* <Link to={`/edit/${product.id}`}><Button type="submit">Edit</Button></Link> */}

//                     </Card>
//                 </div>
//             )
//         })
//         return (
//             <div className="container">
//                 <div className="row">
//                     {list}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Products;