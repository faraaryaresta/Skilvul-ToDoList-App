import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from '../redux/actions/todoAction'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState("")
  const {todos} = useSelector(state => state.todoReducer)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
        id: Date.now(),
        title: inputTodo,
        isDone: false
    }

    dispatch(addTodo(newTodo))
    setInputTodo("")
}
  return (
    <>
        <div className='container shadow pt-4'>
            <div className="text-center" style={{borderBottomStyle: "inset", marginBottom:"30px"}}>
                <h3 style={{marginLeft:"20px"}} className='text mb-4'>What's the plan for today ?</h3>
            </div>
            <div className="input d-flex justify-content-center pt-3">
            <form className='from-group custom-form' onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10">
                      <input 
                      type="text" 
                      placeholder='What To Do' 
                      className="form-control input-todo mb-2 mr-sm-2" 
                      required
                      value={inputTodo} 
                      onChange={e => setInputTodo(e.target.value)}
                      />
                  </div>
                  <div className="col-md-2">
                      <button type='submit' className='btn btn-primary w-100'>Add</button>
                  </div>
                </div>
            </form>
        </div>

        <div className='list-todo'>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">ALL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ACTIVE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">COMPLETED</a>
              </li>
            </ul>

            <div className="content">
              <div>
                <ul className="list-group pt-3 align-items-center">
                {todos.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{width: 750}}>
                    <div className="form-check">
                      <input type="checkbox" className='form-check-input' />
                      <span className="taskText pt-2">{item.title}</span>
                    </div>
                    <div className="iconsWrap">
                        <button className="btn btn-success m-2" style={{border: "none"}}>
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button  className="btn btn-danger" style={{border: "none"}}>
                          <FontAwesomeIcon icon={faTrashCan}  />
                        </button>
                    </div>
                  </li>
                ))}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo