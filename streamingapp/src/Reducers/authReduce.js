
import {SIGN_IN, SIGN_OUT} from '../Actions';

const intialState = {
    signedIn: null,
    userId: null
}
export const authReducer = (state = intialState, action) => {

    switch (action.type) {
        case SIGN_IN:

            return {
                ...state,
                signedIn: true,
                userId: action.payload
            }

        case SIGN_OUT:

            return {
                ...state,
                signedIn: false,
                userId:null
            }

        default: return state
    }


}