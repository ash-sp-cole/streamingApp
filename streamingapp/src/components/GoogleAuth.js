import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { FaGoogle } from 'react-icons/fa';
import {setAuthSignIn ,setAuthSignOut} from '../Actions';


class GoogleAuth extends Component {



    componentDidMount() {

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_API_KEY,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange);
                console.log(this.props.isSignedIn)
              
            })

        })
    }
    // gapi.auth2.getAuthInstance().currentUser.je.Qt.Ad
   
authChange = (isSignedIn) =>{
if (isSignedIn===true){
    this.props.setAuthSignIn(this.auth.currentUser.get().getId())
    // console.log(this.auth.currentUser.je.Qt.Ad, 'user info')
}
else {
    this.props.setAuthSignOut()
}
}

onSignIn = () =>{

this.auth.signIn();

}
onSignOut = () => {

this.auth.signOut();

}
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return 
        }
        else if (this.props.isSignedIn  === true) {
            return  <Button  variant="outline-light" style={{marginLeft:'10px'}} onClick={this.onSignOut}>  <FaGoogle style={{marginRight:'5px'}}/> Sign Out </Button> 
            
            
        }
        else {
            return(
            
               
                <Button  variant="outline-light" style={{marginLeft:'10px'}} onClick={this.onSignIn}>  <FaGoogle style={{marginRight:'5px'}}/> Log in with google </Button>
           
            )
            
    }

}

    render() {
        console.log(this.props.isSignedIn, "state rend" , this.props.userId)
        return (
          
                <h3>{this.renderAuthButton()}</h3>

          

        )
    }


}

 const mapStatetoProps =  (state) => {
return {
isSignedIn: state.auth.signedIn,
userId: state.auth.userId

}


}
export default connect(mapStatetoProps,{setAuthSignIn ,setAuthSignOut}) (GoogleAuth);