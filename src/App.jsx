import { useState } from 'react';
import 'bootstrap'
import FormTask from './components/formTask';
import TaskList from './components/TaskList';


function App() {

    const [taskList, setTaskList] = useState([])
    const [text, setText] = useState('');
    const [prioridad, setPrioridad] = useState('baja')


    const colorMap = {
        'baja': 'text-success',
        'media': 'text-danger-emphasis',
        'para ayer': 'text-danger'
    }

    const handlerText = ( ev )=>{
        setText( ev.target.value );
    }

    const prioridadHandler = ( ev )=>{
        setPrioridad(ev.target.value )
    }

    const addTaskHandler = ( )=>{
        const newTask = {
            id: taskList.length + 1,
            prioridad: prioridad,
            description: text,
            completado: false
        }

        setTaskList([...taskList, newTask]);
    }

    const completeHandler = ( ev, id )=>{
        const newList = taskList.map(( task )=>{
            if(task.id === id){
                console.log(task.prioridad)
                return { ...task, completado:  ev.target.checked }
            }else{
                return task
            }
            
        })
        setTaskList(newList);
    }

    return (
        <>
            <div className="container d-flex flex-wrap contenedor  bg-dark bg-md-success mt-3 p-3 rounded text-white">
                <div className="col-12 col-md-6">
                    <h3 className='titulo'>Pendientes:</h3>
                    <TaskList 
                        colorMap={colorMap}
                        taskList={taskList}
                        completeHandler={completeHandler}
                    />
                </div>
                <FormTask 
                    handlerText={handlerText}
                    text={text}
                    addTaskHandler={addTaskHandler}
                    prioridadHandler={prioridadHandler}
                />
            </div>
        </>
    )
}

export default App
