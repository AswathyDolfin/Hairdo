import React, { useState } from "react";
function ToDo() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [editIndex, setEditIndex] = useState(-1)
    const addTodo = () => {
        if (newTodo.trim() !== '') {
            if (editIndex === -1) {
                setTodos([...todos, newTodo])
            }
            else {
                const updatedTodos = [...todos]
                updatedTodos[editIndex] = newTodo
                setTodos(updatedTodos)
                setEditIndex(-1)
            }
            setNewTodo('')
        }
    }
    const editTodo = (index) => {
        setNewTodo(todos[index])
        setEditIndex(index)
    }
    const deleteTodo = (index) => {
        const updatedTodos = [...todos]
        updatedTodos.splice(index, 1)
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{''}
                        <button onClick={() =>
                            editTodo(index)}>Edit</button>
                        <button onClick={() =>
                            deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={addTodo}>
                    {editIndex === -1 ? 'Add Todo' : 'Edit Todo'}
                </button>
            </div>
        </div>
    )
}
export default ToDo