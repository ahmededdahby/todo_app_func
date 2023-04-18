import React, { useContext } from 'react'

import Todo from './Todo'
import { context } from '../App'
import { useNavigate } from "react-router-dom";

function TodoList() {
    const { todos, setTodos } = useContext(context);
    const navigate = useNavigate();

    const completeTodo = id => {
        let newtodos = todos.map(todo => {
            if (todo.id === id) {
                todo.iscomplete = !todo.iscomplete;
            }
            return todo;
        })
        setTodos(newtodos)
    }

    const removeTodo = id => {
        const newtodos = todos.filter(t => t.id !== id);
        setTodos(newtodos)
    }

    const updateTodo = (id, newvalue) => {
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
        }
        setTodos(prev => prev.map(t => t.id === id ? newvalue : t));
    }


    return <div className='todo-app'>
        <h1>Todo List</h1>
        {todos.map((todo,index) => (
        <Todo
            completeTodo={completeTodo}
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            index={index}
        />
        ))}
        <button
            className="todo-button tt"
            onClick={() => navigate("/form")}>
            Go to form
        </button>
    </div>
    



}

export default TodoList
