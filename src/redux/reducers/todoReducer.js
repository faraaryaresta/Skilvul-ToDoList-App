import { ADD_TODO, DELETE_TODO } from "../actions/todoAction";

const initialState = {
    todos: [
      { id: 1, title: "belajar react", isDone: false },
      { id: 2, title: "nyoba redux", isDone: false },
      { id: 3, title: "pusiiiiing", isDone: false },
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
        default:
            return state;
    }
}
  
export default todoReducer;
  