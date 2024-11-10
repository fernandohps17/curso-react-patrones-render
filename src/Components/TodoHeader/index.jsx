import React, { Children, cloneElement } from 'react'

const TodoHeader = ({children, loading}) => {

    return (
        <header>
            {
                Children.toArray(children).map(child => cloneElement(child, { loading: {loading} }))
            }
        </header>
    )
}

export default TodoHeader