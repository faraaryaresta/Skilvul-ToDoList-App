import { 
    ADD_TODO, 
    DELETE_TODO, 
    COMPLETED_TODO, 
    EDIT_TODO,
    FILTER_ACTIVE_TODO,
    FILTER_COMPLETED_TODO
} 
from "../actions/todoAction";

const initialState = {
    todos: [],
    filter: []
  };
  

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        case COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo) 
            }
        case FILTER_ACTIVE_TODO:
            return {
                ...state,
                filter: state.todos.filter((todo) => !todo.completed)
            }
        case FILTER_COMPLETED_TODO:
            return {
                ...state,
                filter: state.todos.filter((todo) => todo.completed)
            }
        default:
            return state;
    }
}
  
export default todoReducer;
  