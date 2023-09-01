import 'bootstrap'

const FormTask = ({ addTaskHandler,text, prioridadHandler, handlerText })=>{


    return <>
        <div className="col-12 col-md-6">
                    <h3>Escribe un Pendiente: </h3>
                    <input type="text" className="form-control" placeholder="Por Ej. Darle de comer al perro" value={text} aria-label="Username"  onChange={handlerText}/>
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
        
    </>
}

export default FormTask;