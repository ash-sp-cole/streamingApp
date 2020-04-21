import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Form, Button, Jumbotron } from 'react-bootstrap';

class Create extends Component {
    renderInput({ input, label }) {


        return (

                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control placeholder="...."{...input}/>

                </Form.Group>

        )
    }

    onSubmit(formValues){
      
        console.log(formValues, 'form value / on submit ');
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

export default reduxForm({
    form: 'createForm'
})(Create);