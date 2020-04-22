import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../Actions/index';


import { Form, Button, Jumbotron } from 'react-bootstrap';

class Create extends Component {
    renderInput({ input, label, meta }) {

       
        return (

                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control placeholder="...."{...input}/>
              
                </Form.Group>

        )
    }

   onSubmit = (formValues) => {
      
        console.log(formValues, 'form value / on submit ');

        this.props.createStream(formValues);



    }

    render() {
      
        return (

            <div>

                <h3 style={{paddingTop:'5%', paddingBottom:'5%', textAlign:"center"}}> Create your Strean</h3>
            <hr></hr>
            <Jumbotron style={{backgroundColor:"lightGrey", opacity:'0.8'}} >
                <form style={{opacity:'0.9'}}  onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />

              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </form>
                </Jumbotron>

            </div>

        )
    }

}

const validate = (formValues)=>{

    const errors={};

    if (!formValues.title) {
        errors.title= " Please enter a title"    
    }
    if (!formValues.description) {
        errors.description= " Please enter a description"    
    }
    
return errors;
}

const formWrapped = reduxForm({
    form: 'createForm',
    validate
})(Create);

export default connect (null,{createStream}) (formWrapped);