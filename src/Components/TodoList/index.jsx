import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = (props) => {
  return (
    <div className='todo_item_spacing'>
      {props.children}      
    </div>
  )
}

export default TodoList
