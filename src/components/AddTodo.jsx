import React from 'react'
import TodoList from './TodoList'

const AddTodo = () => {
  return (
    <>
        <div className='container shadow pt-4'>
            <div className="text-center" style={{borderBottomStyle: "inset", marginBottom:"30px"}}>
                <h3 style={{marginLeft:"20px"}} className='text mb-4'>What's the plan for today ?</h3>
            </div>
            <div className="input d-flex justify-content-center pt-3">
            <form>
                <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <input 
                    type="text" 
                    className="form-control input-todo mb-2 mr-sm-2" 
                    placeholder='What To Do' 
                    />
                </div>
                <div className="col-md-2">
                    <button type='submit' className='btn btn-primary w-100'>Add</button>
                </div>
                </div>
            </form>
        </div>

        <TodoList/>    
      </div>
    </>
  )
}

export default AddTodo