import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { sellPhone } from '../redux/actions/action'
const PhoneComp = () => {
    const [value, setValue] = useState('')

    const numberOfPhones = useSelector(state => state.phone.numberOfPhones)
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <h2>Phones -- Hooks --</h2>
            <h3>Number Of Phones : {numberOfPhones}</h3>
            <input type='text' onChange={(e)=>setValue(e.target.value)} value={value}/>
            <button onClick={() => dispatch(sellPhone(value))}>Sell Phone</button>
        </div>
    )
}

export default PhoneComp
