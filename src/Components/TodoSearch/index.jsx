import './TodoSearch.scss'

const TodoSearch = ({searchValue, setSearchValue, loading}) => {

  return (
    <input className='todo_search' value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}} type="text" placeholder='Escribe la activadad por hacer' disabled={loading} />
  )
}

export default TodoSearch
