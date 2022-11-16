import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, Label, Input, Button } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import {Loading} from './LoadingComponent';

class Edit extends Component { 
    constructor(props) {  
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // this.props.postProduct (
        // )
        const Prod = {
            id: this.props.product.id,
            title: this.title.value,
            imageUrl: this.imageUrl.value,
            price: this.price.value,
            description: this.description.value
        }

        fetch('http://localhost:5001/admin/edit-product', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( Prod )
        })

    }

    render() {

        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.product != null) 
    
        console.log(this.props.product.id);

        return (
            
            <div className="container" >
                
                <div className="col-lg-4"> 

                    <Form onSubmit={this.handleSubmit}>

                        <Label htmlFor="title">Title</Label>
                        <Input type ="text" name="title" innerRef={(input) => this.title = input}
                         defaultValue = {this.props.product.title}
                        />

                        <Label htmlFor="imageUrl">Image url</Label>
                        <Input  type="text" name="imageUrl" innerRef={(input) => this.imageUrl = input}
                         defaultValue = {this.props.product.imageUrl}
                         />

                        <Label htmlFor="price">Price</Label>
                        <Input type="text" name="price" innerRef={(input) => this.price = input} 
                         defaultValue = {this.props.product.price}
                         />

                        <Label htmlFor="description">Desscription</Label>
                        <Input type="text" name="description" innerRef={(input) => this.description = input} 
                         defaultValue = {this.props.product.description}
                         />

                        <Button>Edit Product</Button>

                    </Form>
                </div>
            </div>

        )
    }
}

export default Edit;