import React, { useState } from 'react'
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, completedTodo, editTodo } from '../redux/actions/todoAction'
import Swal from 'sweetalert2';
import notfound from "../assets/notfound.png"

const AddTodo = () => {
  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState("")
  const [editTodolist, setEditTodolist] = useState(null)
  const {todos} = useSelector(state => state)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (inputTodo.length !== 0) {
      if (!editTodolist) {
        const newTodo = {
          id: Date.now(),
          title: inputTodo,
          completed: false
        }
        dispatch(addTodo(newTodo))
        setInputTodo("")
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Menambahkan todos',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        editTodolist.title = inputTodo
        dispatch(editTodo(editTodolist))
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Edit todos sukses',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Anda harus mengisi todos terlebih dahulu!',
      });
    }
  }
    
    // if (inputTodo.length !== 0) {
    //   dispatch(addTodo(newTodo))
    //   setInputTodo('')
    //     Swal.fire({
    //       position: 'top',
    //       icon: 'success',
    //       title: 'Menambahkan todos',
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Anda harus mengisi todos terlebih dahulu!',
    //   });
    // };
    // dispatch(addTodo(newTodo))
    // setInputTodo("")
  

  // const handleDeleteClick = () => {
	// 	dispatch(deleteTodo({ todo }));
	// };

  const handleCompleteClick = (item) => {
    dispatch(completedTodo(item))
  }
  
  const updateHandler = (id, title) => {
    setInputTodo(title)
    setEditTodolist({id, title})
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
                  value={inputTodo} 
                  onChange={e => setInputTodo(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                {editTodolist ? (
                  <button 
                    type='submit' 
                    className='btn btn-success w-100'
                  >
                    Update
                  </button>
                ) : (
                  <button 
                    type='submit' 
                    className='btn btn-primary w-100'
                  >
                    Add
                  </button>
                )}
                  
              </div>
            </div>
          </form>
        </div>

        <div className='list-todo'>
          <div className='item-todo'>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ALL</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ACTIVE</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">COMPLETED</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <ul className="list-group pt-3 align-items-center">
                  {todos.length !== 0 ?
                    todos.map((item) => {
                      return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center" style={{width: 750}}>
                        <div className="form-check">
                          <input type="checkbox" 
                            checked={item.completed} 
                            onChange={() => handleCompleteClick(item)}
                            className='form-check-input' />
                          <span className={item.completed ? "text-decoration-line-through" : ""}>
                            {item.title}
                          </span>
                        </div>
                        <div className="iconsWrap">
                          <button className="btn btn-success m-2" style={{border: "none"}}>
                            <FontAwesomeIcon onClick={() => updateHandler(item.id, item.title)} icon={faPen} />
                          </button>
                          <button onClick={() => dispatch(deleteTodo(item))} className="btn btn-danger" style={{border: "none"}}>
                            <FontAwesomeIcon icon={faTrashCan}  />
                          </button>
                        </div>
                      </li>
                      )
                    }) : 
                      <>
                        <div className='data-kosong'>     
                          <div className='justify-content-center'>
                            <img src={notfound}  
                              className="mx-auto d-block" 
                              alt="notfound"
                              style={{width: 200}}
                            />
                            <h5 className='text-gray-dark text-sm text-center pt-2'>No ToDo List</h5>
                          </div>   
                        </div>
                      </>
                    }
                   
                  
                </ul>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo