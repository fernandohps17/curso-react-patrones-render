import React from 'react'
import { useTodos } from './hook/useTodos'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import TodoSearch from './Components/TodoSearch'
import TodoItem from './Components/TodoItem'
import Layout from './Components/Layout'
import TodosLoading from './Components/TodosLoading'
import TodosError from './Components/TodosError'
import EmptyTodos from './Components/EmptyTodos'
import Modal from './Components/Modal'
import TodoFrom from './Components/TodoFrom'
import TodoHeader from './Components/TodoHeader'
import SearchResultsTodos from './Components/SearchResultsTodos'

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue
  } = useTodos()

  return (
    <>
      <Layout>
        <TodoHeader>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          searchResults={searchResults}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={() => <SearchResultsTodos />}
          render={todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)} 
            />
          )}
        />

        {/* <TodoList>
          {loading && <TodosLoading />}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
          {
            searchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
            ))
          }
        </TodoList> */}



        <CreateTodoButton />

        {openModal && (
          <Modal>
            <TodoFrom openModal={openModal} setOpenModal={setOpenModal} addTodo={addTodos} />
          </Modal>
        )}
      </Layout>
    </>
  )
}

export default App