//inital value defined ,switch cases 
import {ADD_TO_CART,REMOVE_TO_CART} from "../constants"

const initialState= {
    cardData:[]
}
export default function cardItems(state=[],action){
// eslint-disable-next-line default-case
switch(action.type){
    case ADD_TO_CART:

    // console.log("reducer",action);
        return[
            ...state,
            {cardData:action.data}
        ]
        case REMOVE_TO_CART:
        state.pop()
    // console.log("reducer",action);
        return[
            ...state,
        ]
        default:
            return state 
}
}