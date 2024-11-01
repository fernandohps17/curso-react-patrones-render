import { useTodos } from '../../hook/useTodos';
import { FaPlus } from "react-icons/fa";
import './CreateTodoButton.scss'

const CreateTodoButton = () => {

    const {openModal, setOpenModal} = useTodos()

    return (
        <button className='create_todo_button' onClick={() => setOpenModal(!openModal)}>
            <FaPlus />
        </button>
    )
}

export default CreateTodoButton