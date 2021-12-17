import { CREATE_TODO_ITEM, INIT_TODO, UPDATE_TODO_ITEM } from "../constants/constants";

const initState = {todoItems: []}

const todoReducer = (state = initState, action) => {
  switch(action.type) {
    case CREATE_TODO_ITEM:
      return {...state, todoItems: [...state.todoItems, action.payload]}

    case UPDATE_TODO_ITEM:
      const newTodoItems = state.todoItems.map(todo => (todo.id === action.payload.id ? action.payload : todo))
      return {...state, todoItems: newTodoItems} 

    case INIT_TODO:
      return {...state, todoItems:  action.payload}

    default:
      return state
  }
};

export default todoReducer;
