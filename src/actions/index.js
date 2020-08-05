export const ADD_TODO = (todo) => ({
    type: "ADD_TODO",
    todo: todo
})

export const INIT_TODO = (todo) => ({
    type: "INIT_TODO",
    todo: todo
})

export const MARK_TODO = id => ({
    type: "MARK_TODO",
    id: id
})

export const REMOVE_TODO = id => ({
    type: "REMOVE_TODO",
    id: id
})
