import React from 'react';
import Button from './Button';
import './TaskDetails.css';
import {useParams, useNavigate} from 'react-router-dom';

const TaskDetails = () => {
    //retorna os parametros que a gente tem na url
    const params = useParams();
    const history = useNavigate()
    return ( 
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia, ipsam dolorem veritatis eum facilis numquam, sapiente eos, distinctio voluptas beatae omnis tempore aspernatur vero voluptatibus ad! Sequi, ducimus velit?</p>
            </div>
            <div className="back-button-container" onClick={()=>history("/")}>
                <Button>Voltar</Button>
            </div>
        </> 
    );
}
 
export default TaskDetails;