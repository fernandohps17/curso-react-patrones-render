import React, { useContext } from 'react'
import './TodoSearch.scss'
import { TodoContext } from '../../Context'

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext)

  return (
    <input className='todo_search' value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}} type="text" placeholder='Escribe la activadad por hacer' />
  )
}

export default TodoSearch
