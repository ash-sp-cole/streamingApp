import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

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

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div></div>
        }
        else if (this.state.isSignedIn === true) {
            return <div> <h3> is signed in</h3> </div>;
        }
        else {
            return(
            <div> 
                <h5> not logged in</h5>
                <Button> Log in with google </Button>
            </div>
            )
            
    }

}

    render() {
        return (
            <div>
                <h3>{this.renderAuthButton()}</h3>

            </div>

        )
    }


}
export default GoogleAuth;