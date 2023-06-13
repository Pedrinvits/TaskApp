import { useState } from 'react'
import './AddTask.css';
import Button from './button'
const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        //lidando com as mudanças que esse input vai sofrer
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        //pega o que você digita e manda pro handleTaskAddition que vai criar a task embaixo
        handleTaskAddition(inputData)
        // limpando o input
        setInputData('')
    }
    return ( 
        <div className="add-task-container">

            <input value={inputData} onChange={handleInputChange} className="add-task-input" type="text" placeholder='Digite sua Tarefa'/>

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;
//imr
//sfc