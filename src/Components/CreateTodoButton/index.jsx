import React, { useContext } from 'react'
import { TodoContext } from '../../Context';
import { FaPlus } from "react-icons/fa";
import './CreateTodoButton.scss'

const CreateTodoButton = () => {

    const {openModal, setOpenModal} = useContext(TodoContext)

    return (
        <button className='create_todo_button' onClick={() => setOpenModal(!openModal)}>
            <FaPlus />
        </button>
    )
}

export default CreateTodoButton