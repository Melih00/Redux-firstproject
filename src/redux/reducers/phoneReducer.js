import {SELL_PHONE } from '../types/types'

const initialState = {
    numberOfPhones: 33
}

const phoneReducer = (state = initialState, action)=>{
    console.log(action)
    switch (action.type) {
        case SELL_PHONE:
            return {
                ...state,
                numberOfPhones: state.numberOfPhones - Number(action.payload)
            }
        default:
            return {
                ...state,
            }
    }
}
export default phoneReducer