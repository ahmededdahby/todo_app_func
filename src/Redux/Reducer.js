import { GET_TODO_REQUEST, GET_TODO_SUCCESS,GET_TODO_ERROR } from "./constants";


export const GET_TODO=(state = {data : []},Action)=>{
    
    switch(Action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                
            };
        case GET_TODO_SUCCESS:
            return { data: Action.playload };
        case GET_TODO_ERROR :
            console.log("hdhdh");
            return { error: Action.playload  };
        default:
            
            return state;

    }

}
export const POST_TODO=(state = {data : []},Action)=>{
    
    switch(Action.type) {
        case "POST_TODO_REQUEST":
            return {
                ...state,
                
            };
        case "POST_TODO_SUCCESS":
            
            return { ...state, data :[...state.data,Action.playload]  };
        case "POST_TODO_ERROR" :
            console.log("hdhdh");
            return { error: Action.playload };
        default:
            
            return state;

    }

}
export const DELETE_TODO=(state = {data : []},Action)=>{
    
    switch(Action.type) {
        case "DELETE_TODO_REQUEST":
            return {
                ...state,
                
            };
        case "DELETE_TODO_SUCCESS":
            console.log(Action.playload)
            return { data:[...state.data.filter(item=> item.id !== Action.playload)]  };
            
        case "DELETE_TODO_ERROR" :
            console.log("hdhdh");
            return { error: Action.playload };
        default:
            
            return state;

    }

}