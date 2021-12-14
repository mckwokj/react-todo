import { CREATE_TODO_ITEM, DELETE_TODO_ITEM_STATUS, UPDATE_TODO_ITEM_STATUS } from "../constants/constants";

const initState = {todoItems: []}

const todoReducer = (state = initState, action) => {
  switch(action.type) {
    case CREATE_TODO_ITEM:
      return {...state, todoItems: [...state.todoItems, action.payload]}

    case UPDATE_TODO_ITEM_STATUS:
      const newTodoItems = state.todoItems.map(todo => (todo.id === action.payload.id ? { ...todo, done: !todo.done} : todo))
      return {...state, todoItems: newTodoItems} 

    case DELETE_TODO_ITEM_STATUS:
      const filteredTodoItems = state.todoItems.filter(todo => todo.id !== action.payload.id)
      return {...state, todoItems: filteredTodoItems}

    default:
      return state
  }
};

export default todoReducer;

