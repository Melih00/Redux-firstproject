import {SELL_LAPTOP } from '../types/types'

const initialState = {
    numberOfLaptops: 99
}

const laptopReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SELL_LAPTOP:
            return {
                ...state,
                numberOfLaptops: state.numberOfLaptops - Number(action.payload)
            }
        default:
            return {
                ...state,
            }
    }
}
export default laptopReducer