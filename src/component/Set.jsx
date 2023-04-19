
import React, { useContext, useState   } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {  postData } from "./../Redux/Action"
import DataContext from '../context/DataContext';

function Set(props) {
    const { add } = useContext(DataContext);
    const [input,setInput] = useState("")

const handleChange =(event) => {
    setInput(event.target.value);
}
const todo={
    "Name":input,
}
const handleadd =event   => {
    add(todo)
}

    return <>
    <form onSubmit={handleadd}>
    <input type="text" onChange={handleChange}/>
    <button type="submit">ADD</button>
    </form>

    </>
}

export default Set
