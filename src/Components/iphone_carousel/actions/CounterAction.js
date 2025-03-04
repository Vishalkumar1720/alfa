import {INCREMENT,DECREMENT} from './Types.js'
export const increment=()=>{
    return{
        type:INCREMENT
    }
}
export const decrement=()=>{
    return{
        type:DECREMENT
    }
}