import React from 'react'
import './Layout.scss'

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='layout'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
