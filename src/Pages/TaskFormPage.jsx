
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import TodoForm from "../component/TodoForm";
import { context } from "../App";

const TaskFormPage = () => {
    const navigate = useNavigate();
   
    const {todos,setTodos} = useContext(context);
    const addtodos = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        console.log(newTodo)
    }
    return (
        <>
            <h1 className="mx-3">Task Form</h1>
            <TodoForm onSubmit={addtodos}  />
            <button className="todo-button yy" onClick={() => navigate(-1)}>
                Go back to list
            </button>
        </>
    );
};

export default TaskFormPage;