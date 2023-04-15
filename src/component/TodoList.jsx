import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addtodos = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        console.log(todo)
    }

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


    return (
        <div className='todo-app'>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addtodos} />
            <Todo
                completeTodo={completeTodo}
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
