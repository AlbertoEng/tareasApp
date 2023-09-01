const TaskList = ({ taskList, colorMap, completeHandler }) => {

    return <>
        <ul className="list-group col-11">
            {
                taskList.length === 0
                    ? <p className='fs-4 text-center text-primary'>Aun No hay Tareas. Agrega Una</p>
                    : taskList.map((task) => (
                        <li key={task.id} className="list-group-item d-flex justify-content-end">
                            <p htmlFor="" className={`${colorMap[task.prioridad]} fs-4 m-0`} style={{ textDecoration: task.completado ? 'line-through' : 'none' }}>{task.description}</p>
                            <input className='mx-3' type="checkbox" id="" onChange={(ev) => completeHandler(ev, task.id)} />
                        </li>
                    ))
            }
        </ul>
    </>
}

export default TaskList