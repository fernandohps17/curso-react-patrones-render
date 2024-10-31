import { tailChase } from 'ldrs'
import React from 'react'
import './TodosLoading.scss'

const TodosLoading = () => {

  tailChase.register()

  return (
    <div className='container_loaders'>
      <l-tail-chase
        size="40"
        speed="1.75"
        color="#7b7b7b"
      ></l-tail-chase>
    </div>
  )
}

export default TodosLoading