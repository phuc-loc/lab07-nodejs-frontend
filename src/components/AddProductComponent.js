import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Label, Input, Button } from 'reactstrap';


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
                <div className="col-lg-4">
                    <Form onSubmit={this.handleSubmit}>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" name="title" innerRef={(input) => this.title = input} />

                        <Label htmlFor="imageUrl">Image url</Label>
                        <Input type="text" name="imageUrl" innerRef={(input) => this.imageUrl = input} />

                        <Label htmlFor="price">Price</Label>
                        <Input type="text" name="price" innerRef={(input) => this.price = input} />

                        <Label htmlFor="description">Desscription</Label>
                        <Input type="text" name="description" innerRef={(input) => this.description = input} />

                        <Button>Add Product</Button>

                    </Form>
                </div>
            </div>

        )
    }
}

export default AddProduct;