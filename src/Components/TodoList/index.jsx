import React from 'react'

const TodoList = (props) => {

  const renderFunc = props.children || props.render

  return (
    <div className='todo_item_spacing'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {/* {props.searchResults && props.onEmptySearchResults()} */}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}

      {/* {props.searchedTodos.map(todo => props.render(todo))} */}
      {/* {props.searchedTodos.map(props.render)} */}
      {props.searchedTodos.map(renderFunc)}

      {/* {props.children}       */}
    </div>
  )
}

export default TodoList