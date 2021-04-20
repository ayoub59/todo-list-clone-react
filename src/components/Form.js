import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';



function Form({ setinputText, todos, setTodos, inputText, setStatus }) {
    const inputTextHandled = (e) => {
        setinputText(e.target.value)
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        console.log("oh yeah")
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ])
        setinputText("")
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandled} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <AddBoxIcon />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    )
}

export default Form
