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
            body: JSON.stringify({ productId: productId })
        })
    }


    render() {
        console.log(this.props)

        const list = this.props.products.map((product) => {
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
                return (
                    // <div className="container">
                    //     <div className="row">
                    <div className="col-lg-4">
                        <Card className="container">
                            <CardHeader tag="h5">{product.title}</CardHeader>
                            <CardBody>
                                <CardImg src={product.imageUrl} style={{ height: 300 }} />
                                <CardSubtitle>Price: {product.price} $</CardSubtitle>
                                <CardText>{product.description}</CardText>
                            </CardBody>
                            <div className="row p-3">
                                {/* Button addtocart */}
                                <Form onSubmit={(value) => this.handleSubmit(value)} >
                                    <Input type="hidden" name="productId" value={product._id} />
                                    <Button type="submit">Add to Cart</Button>
                                </Form>

                                {/* button edit */}
                                <Link to={`/edit/${product._id}`}><Button type="submit">Edit</Button></Link>

                                {/* button Delete */}
                                <Form onSubmit={(value) => this.handleSubmitDelete(value)} >
                                    <Input type="hidden" name="productId" value={product._id} />
                                    <Button type="submit">Delete</Button>
                                </Form>
                            </div>

                        </Card>
                    </div>
                )
        })

        return (
            <div className="container">
                <div className="row mt-3" >
                    {list}
                </div>
            </div>
        )
    }
}

export default Shop;