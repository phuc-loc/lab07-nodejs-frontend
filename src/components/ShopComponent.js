import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg, Button, CardText, CardBody, CardHeader, CardSubtitle, Form, Input } from 'reactstrap';
import { Loading } from "./LoadingComponent";

class Shop extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    } 

    handleSubmit(value) {
        const id = value.target.productId.value;
        // console.log('id', id);
        fetch('http://localhost:5001/user/cart', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        })
    }

    handleSubmitDelete(value) {
        const productId = value.target.productId.value; 
        // console.log('id-edit', id);
        fetch('http://localhost:5001/admin/delete-product', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: productId})
        })
    }

    render() {

        const list = this.props.products.map( (product) => {

            // **Loading, errMess** 
            if (this.props.products.isLoading) {
                return (
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (this.props.products.errMess) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4>{this.props.products.errMess}</h4>
                            </div>
                        </div>
                    </div>
                );
            }
            else
                // **Loading, errMess**

                console.log('imageurl',product.title)

                return (
                    <div className="col-lg-4 ">
                        <Card>
                            <CardHeader>{product.title}</CardHeader>
                            <CardBody>
                                <CardImg src={product.imageUrl} />
                                <CardSubtitle>{product.price}</CardSubtitle>
                                <CardText>{product.description}</CardText>
                            </CardBody>

                            {/* Button addtocart */}
                            <Form onSubmit={(value) => this.handleSubmit(value)} >
                                <Input type="hidden" name="productId" value={product.id} />
                                <Button type="submit">Add to Cart</Button>
                            </Form>

                            <Link to={`/edit/${product.id}`}><Button type="submit">Edit</Button></Link>

                            {/* button Delete */}
                            <Form onSubmit={(value) => this.handleSubmitDelete(value)} >
                                <Input type="hidden" name="productId" value={product.id} />
                                <Button type="submit">Delete</Button>
                            </Form>


                        </Card>
                    </div>
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
}

export default Shop;