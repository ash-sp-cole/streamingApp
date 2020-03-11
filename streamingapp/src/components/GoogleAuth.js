import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { FaGoogle } from 'react-icons/fa';



class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount() {

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_API_KEY,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get()
                })
                this.auth.isSignedIn.listen(this.authChange);
                console.log(this.state.isSignedIn)
            })

        })
    }

   
authChange = () =>{
this.setState({
    isSignedIn: this.auth.isSignedIn.get()
})
}

onSignIn = () =>{

this.auth.signIn();

}
onSignOut = () => {

this.auth.signOut();

}

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div></div>
        }
        else if (this.state.isSignedIn === true) {
            return <div> <Button  variant="outline-light" style={{marginLeft:'10px'}} onClick={this.onSignOut}>  <FaGoogle style={{marginRight:'5px'}}/> Sign Out </Button> </div>;
        }
        else {
            return(
            <div> 
               
                <Button  variant="outline-light" style={{marginLeft:'10px'}} onClick={this.onSignIn}>  <FaGoogle style={{marginRight:'5px'}}/> Log in with google </Button>
            </div>
            )
            
    }

}

    render() {
        console.log(this.props.propIsSignedIn)
        return (
            <div>
                <h3>{this.renderAuthButton()}</h3>

            </div>

        )
    }


}

 const mapStatetoProps =  (state) => {
return {
propIsSignedIn: state.signedIn
}

}

const mapDispatchToProps = () =>{
    return{
        

    }
}






export default connect(mapStatetoProps,mapDispatchToProps) (GoogleAuth);