import React from 'react'

// Components
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
import { ChangeAlertWithStorageListener } from './Components/ChangeAlert'

// Hooks
import { useTodos } from './hook/useTodos'


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
    setSearchValue,
    addTodos,
    sincronizedItem
  } = useTodos()

  return (
    <>
      <Layout>
        <TodoHeader loading={loading}>
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={() => <SearchResultsTodos />}

          // Render Props
          render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        >

          {/* Render Funcion */}
          {/* {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )} */}

        </TodoList>

        <CreateTodoButton />

        {openModal && (
          <Modal>
            <TodoFrom openModal={openModal} setOpenModal={setOpenModal} addTodo={addTodos} />
          </Modal>
        )}

        <ChangeAlertWithStorageListener 
          sincronize={sincronizedItem}
        />
      </Layout>
    </>
  )
}

export default App