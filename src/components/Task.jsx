import React from 'react';
import {CgClose,CgInfo} from 'react-icons/cg';
import {useNavigate} from "react-router-dom";
import './Task.css'
const Task = ( { task, handleTaskClick, handleTaskDeletion } ) => {
    const history = useNavigate();
    
    return (
        // style condicional para que quando a task estiver complata ele coloque uma borda verde na esquerda
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} } >
            
            {/* SIM PODEMOS COLOCAR ONCLICK EM UMA DIV */}
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>  
                
            <div className="buttons-container">

                <button className="see-task-details-button" onClick={()=>history("/"+task.title)}>
                    <CgInfo/>
                </button>

                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/>
                </button>
            </div>
        </div>
    )
   
}
 
export default Task;