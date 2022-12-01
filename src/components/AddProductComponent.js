import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Label, Input, Button, FormGroup, Col } from 'reactstrap';


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event) {
        const newProduct = {
            title: this.title.value,
            price: this.price.value,
            imageUrl: this.imageUrl.value,
            description: this.description.value
        }
        console.log(newProduct);

        fetch('http://localhost:5001/admin/add-product', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        // event.preventDefault();
    }

    render() {
        return (
            <div className="container" >
                <div className="row justify-content-md-center mt-3">
                    <div className="col-lg-7 ">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row >
                                <Label htmlFor="title" sm={2}>Title</Label>
                                <Col sm={10} >
                                    <Input type="text" name="title" innerRef={(input) => this.title = input} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="imageUrl" sm={2}>Image url</Label>
                                <Col sm={10} >
                                    <Input type="text" name="imageUrl" innerRef={(input) => this.imageUrl = input} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="price" sm={2}>Price</Label>
                                <Col sm={10} >
                                    <Input type="text" name="price" innerRef={(input) => this.price = input} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="description" sm={2}>Desscription</Label>
                                <Col sm={10} >
                                    <Input type="text" name="description" innerRef={(input) => this.description = input} />
                                </Col>
                            </FormGroup>

                            <Button>Add Product</Button>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProduct;