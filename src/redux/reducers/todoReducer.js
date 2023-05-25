import { ADD_TODO, DELETE_TODO, COMPLETED_TODO, EDIT_TODO } from "../actions/todoAction";

const initialState = {
    todos: [
      { id: 1, title: "belajar react", completed: false },
      { id: 2, title: "nyoba redux", completed: true },
      { id: 3, title: "pusiiiiing", completed: false },
    ],
  };
  

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        case COMPLETED_TODO:
            return {
                todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
            }
        case EDIT_TODO:
            return {
                todos: state.todos.map((todo) => todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo) 
            }
        default:
            return state;
    }
}
  
export default todoReducer;
  