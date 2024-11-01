import './TodoCounter.scss'

const TodoCounter = ({completedTodos, totalTodos}) => {

    return (
        <div className='todo_counter'>
            <p>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</p>
        </div>
    )
}

export default TodoCounter
