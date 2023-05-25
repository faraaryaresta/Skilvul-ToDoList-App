export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const COMPLETED_TODO = "COMPLETED_TODO"
export const EDIT_TODO = "EDIT_TODO"

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

export const completedTodo = (todo) => {
    return {
        type: COMPLETED_TODO,
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}