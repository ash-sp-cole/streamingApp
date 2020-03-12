import { combineReducers} from 'redux';
import { authReducer } from './authReduce';


export default combineReducers({
   auth: authReducer
})