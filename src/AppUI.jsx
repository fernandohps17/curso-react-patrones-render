import React, { useContext } from 'react'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import TodoSearch from './Components/TodoSearch'
import TodoItem from './Components/TodoItem'
import Layout from './Components/Layout'
import TodosLoading from './Components/TodosLoading'
import TodosError from './Components/TodosError'
import EmptyTodos from './Components/EmptyTodos'
import { TodoContext } from './Context'
import Modal from './Components/Modal'
import TodoFrom from './Components/TodoFrom'

const AppUI = () => {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = useContext(TodoContext)

    return (
        <>
            <Layout>
                <TodoCounter />
                <TodoSearch />

                <TodoContext.Consumer>
                    {() => (
                        <TodoList>
                            {loading && <TodosLoading />}
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                            {
                                searchedTodos.map(todo => (
                                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                                ))
                            }
                        </TodoList>
                    )}
                </TodoContext.Consumer>

                <CreateTodoButton />

                {openModal && (
                    <Modal>
                        <TodoFrom />
                    </Modal>
                )}
            </Layout>
        </>
    )
}

export default AppUI