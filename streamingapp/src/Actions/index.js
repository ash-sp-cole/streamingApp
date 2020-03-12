export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";


export const setAuthSignIn = (Id) => {
    
  
return{
type: SIGN_IN,
payload: Id

}

}

export const setAuthSignOut = () => {
    
    console.log("test action")
return {
    type: SIGN_OUT

}
    
    }
