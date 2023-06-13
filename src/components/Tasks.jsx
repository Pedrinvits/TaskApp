import React from 'react';
import Task from './Task';
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
        {/* sempre que usar o map , colocar uma key para ajudar o react a achar o que voce quer com mais clareza */}
        {tasks.map( task => <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>)}
        </>
    )
}
export default Tasks;