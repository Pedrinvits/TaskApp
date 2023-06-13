//Importações do React 
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert'
// Importação de Componentes
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks.jsx'
import Header from './components/Header.jsx'
import TaskDatails from './components/TaskDetails'
const App = () => {
  const [tasks, setTasks] = useState([]);
 
  useEffect(()=> {
    
    // sempre que for fazer requisicao dentro do useEffect voce precisa criar uma funcao assincrona e la em baixo chamar ela
    const fetchTasks = async () => {
       const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
       setTasks(data)
    }
    
    fetchTasks();
    
  },[])
  // função que cria uma nova task
  const handleTaskAddition = ( taskTitle ) => {

    if(taskTitle != ''){
        const newTasks = [ ...tasks, {
          title : taskTitle,
          id : uuidv4(),
          completed: false,
        }]
        setTasks(newTasks)
    }else{
      swal({
        title: "Escreva uma tarefa !",
        icon: "warning",
      });
    }
   
  }

  const handleTaskDeletion = ( taskId ) => {

    const newTasks =  tasks.filter (task => task.id != taskId)

    setTasks(newTasks)
  }

  // função que completa as tarefas
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      // percorre as tasks verificando o id fornecido, se ele achar o id ele muda o completed tela pro valor oposto
      if (task.id == taskId) return { ... task, completed: !task.completed }

      return task;

    });
    setTasks(newTasks)
  };

  return (
    <div className="container">
        <Header/>
          <BrowserRouter>
            <Routes>
                  <Route path='/' 
                    exact 
                    element={
                      <>
                        <AddTask handleTaskAddition={handleTaskAddition}/>
                        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
                      </>
                    }
                  />
                  
                  <Route path='/:taskTitle' exact element={<TaskDatails/>}></Route>
                
            </Routes>
          </BrowserRouter>
     </div>
        
     
     
    
  )
}

export default App
