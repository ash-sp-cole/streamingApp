
const intialState = {
    signedIn: null
}
export const authReducer = (state = intialState, action) => {

    if (action.type === "SIGN_IN") {

        return {
            ...state,
            signedIn: true
        }
    }

    else if (action.type === "SIGN_OUT") {
        return {
            ...state,
            signedIn: false
        }
    }
        else {
            
            return state
        }
    

}