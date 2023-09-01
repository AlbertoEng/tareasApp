import { useState } from 'react';
import 'bootstrap'


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
        setText( ev.target.value);
    }

    const prioridadHandler = ( ev )=>{
        setPrioridad(ev.target.value)
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
                    <ul className="list-group col-11">
                        {
                            taskList.length === 0 
                                ? <p className='fs-4 text-center text-primary'>Aun No hay Tareas. Agrega Una</p>
                                : taskList.map(( task )=>(
                                    <li key={task.id} className="list-group-item d-flex justify-content-end">
                                        <p htmlFor="" className={ `${colorMap[task.prioridad]} fs-4 m-0`} style={{ textDecoration: task.completado ? 'line-through': 'none' }}>{task.description}</p>
                                        <input className='mx-3' type="checkbox" id="" onChange={ (ev) => completeHandler(ev, task.id) } />
                                    </li>
                                ))
                        }
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Escribe un Pendiente: </h3>
                    <input type="text" className="form-control" placeholder="Por Ej. Darle de comer al perro" aria-label="Username" value={text} onChange={handlerText}/>
                    <div className='container p-3 border mt-3 rounded'>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='baja' defaultChecked onChange={prioridadHandler} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Baja
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='media' onChange={prioridadHandler}  />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Media
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='para ayer' onChange={prioridadHandler} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Para Ayer ¡¡¡
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center">
                                <button onClick={addTaskHandler} className="btn btn-primary btn-lg">
                                    Agregar Tarea
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
