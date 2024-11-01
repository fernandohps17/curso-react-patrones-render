import React from 'react'

const TodoList = (props) => {
  return (
    <div className='todo_item_spacing'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {props.searchResults && props.onSearchResults()}

      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
      {(!props.searchResults && !props.searchedTodos.length) && props.onSearchResults()}

      {/* {props.searchedTodos.map(todo => props.render(todo))} */}
      {props.searchedTodos.map(props.render)}

      {props.children}      
    </div>
  )
}

export default TodoList
// video 10 minuto 3 segundo 40