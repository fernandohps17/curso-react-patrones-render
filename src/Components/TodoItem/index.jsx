import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import React from 'react'
import './TodoItem.scss'

const TodoItem = ({text, completed, onComplete, onDelete}) => {
    return (
        <>
            <li className='todo_item'>
                <span className={`todo_item_check ${completed && 'todo_item_check_completed'}`} onClick={onComplete}><FaCheck /></span>
                <p className={`todo_item_text ${completed && 'todo_item_text_completed'}`}>{text}</p>
                <span className='todo_item_close' onClick={onDelete}><IoCloseSharp /></span>
            </li>
        </>
    )
}

export default TodoItem
