import React from 'react'
import { faPen, faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TodoList = () => {
  return (
    <>
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
                <li className="list-group-item d-flex justify-content-between align-items-center" style={{width: 750}}>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' />
                    <span className="taskText pt-2">aku</span>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList