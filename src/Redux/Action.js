import axios from "axios";
import { GET_TODO_REQUEST, GET_TODO_SUCCESS,GET_TODO_ERROR } from "./constants";

export const getData = () => async (dispatch)=>{
    try{
        dispatch({type: GET_TODO_REQUEST});
        const {data} = await axios.get('http://localhost:3000/data');
        dispatch({type: GET_TODO_SUCCESS,playload: data});
        console.log(data);

    }catch(e){
        dispatch({
            type: GET_TODO_ERROR,
            playload: 
                e.response && e.response.data.message
                ? e.response.data.message
                : e.message,
        });
    }
}
export const postData = (input) => async (dispatch)=>{
    try{
        dispatch({type: "POST_TODO_REQUEST"});
        const { data } = await axios.post('http://localhost:3000/data',input);
        dispatch({type: "POST_TODO_SUCCESS",playload: data});

    }catch(e){
        dispatch({
            type: "POST_TODO_ERROR",
            playload: 
                e.response && e.response.data.message
                ? e.response.data.message
                : e.message,
        });
    }
}
