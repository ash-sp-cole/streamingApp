import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Create extends Component {
renderInput(input){
    
    
       return (
    
       <div>
    <input type='text'  {...input}      />
        </div>
       )
    }


    render() {

        return (

            <div>

                <h3> create page </h3>

                <form>
                    <Field name ="title" component={this.renderInput}/>
                    <Field name ="description" component={this.renderInput}/>
                    
                </form>


            </div>

        )
    }

}

export default reduxForm({
    form: 'createForm'
})(Create);