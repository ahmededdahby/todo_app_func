import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setinput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handlechange = e => {
        setinput(e.target.value)
    }
    const handlesubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.random(),
            text: input
        })
        setinput("")

    }
    return (
        <div>
            <form className='todo-form' onSubmit={handlesubmit}>
                {props.edit ? (
                    <>
                        <input
                            type="text"
                            value={input}
                            name='input'
                            className='todo-input edit'
                            placeholder='Edit your Todo'
                            onChange={handlechange}
                            ref={inputRef}
                        />
                        <button type='submit' className='todo-button edit'>Update</button>
                    </>

                ) :
                    (<>
                        <input
                            type="text"
                            value={input}
                            name='input'
                            className='todo-input'
                            placeholder='please enter a ToDo'
                            onChange={handlechange}
                            ref={inputRef}
                        />
                        <button type='submit' className='todo-button'>Add todo</button>
                        
                    </>)
                }

            </form>


        </div>
    )
}

export default TodoForm
