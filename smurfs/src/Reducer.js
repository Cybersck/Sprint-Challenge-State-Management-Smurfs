import { bindActionCreators } from "redux";

const initialState = {
    smurfs: null,
    form: null,
    requiresUpdate: true
}

const mainReducer = (state=initialState, action) => {

switch(action.type) {
    case 'get':
    return {
        ...state,
        smurfs: action.payload,
        requiresUpdate: false
    }
    case 'set':
        switch(action.payloadType) {
            case 'name':
                return {...state, form: {...state.form, name: action.payload}}
            case 'age':
                return {...state, form: {...state.form, age: action.payload}}
            case 'height': 
                return {...state, form: {...state.form, height: `${action.payload}CM`}}
        }
    case 'delete':
        return {...state, requiresUpdate: true}
    case 'post':
        return {...state, requiresUpdate: true}
    default:
        return state;

}

}

export default mainReducer;