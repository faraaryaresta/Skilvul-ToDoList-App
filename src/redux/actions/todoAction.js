export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}