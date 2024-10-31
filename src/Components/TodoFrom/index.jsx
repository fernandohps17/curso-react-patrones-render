import React, { useContext, useState } from 'react'
import { TodoContext } from '../../Context'
import '../Modal/Modal.scss'
import { IoMdClose } from "react-icons/io";

const TodoFrom = () => {

    const {openModal, setOpenModal, addTodo} = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(!openModal)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit} className='modal_content'>
            <label className='modal_content_title'>
                <p>Escribe tu nuevo Todo</p>
                <p className='modal_content_close' onClick={() => { setOpenModal(!openModal) }}><IoMdClose /></p>
            </label>
            <label className='modal_content_input'><input type="text" value={newTodoValue} onChange={onChange} required placeholder='Agrega tu nuevo TODO...' /></label>
            <label className='modal_content_button'>
                <button type='submit'>Añadir</button>
            </label>
        </form>
    )
}

export default TodoFrom
