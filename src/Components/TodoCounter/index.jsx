import React, { useContext } from 'react'
import './TodoCounter.scss'
import { TodoContext } from '../../Context'

const TodoCounter = () => {

    const {completedTodos, totalTodos} = useContext(TodoContext)

    return (
        <div className='todo_counter'>
            <p>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</p>
        </div>
    )
}

export default TodoCounter
