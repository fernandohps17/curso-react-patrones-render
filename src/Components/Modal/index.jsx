import React from 'react'
import ReactDOM from 'react-dom'
import { createPortal } from 'react-dom'
import './Modal.scss'

const Modal = ({ children }) => {
    return createPortal(
        <div className='container_modal'>
            <div className='modal'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal