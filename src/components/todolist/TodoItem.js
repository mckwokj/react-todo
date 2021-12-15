import { useDispatch } from "react-redux";
import { DELETE_TODO_ITEM_STATUS, UPDATE_TODO_ITEM_STATUS } from "../../constants/constants";

const TodoItem = (props) => {

  const {id, done, text} = props.item

  const dispatch = useDispatch()

  const onTodoItemClick = () => {
    dispatch({type: UPDATE_TODO_ITEM_STATUS, payload: {id: id, done: !done }})
  }

  const onDeleteButtonClick = () => {
    dispatch({type: DELETE_TODO_ITEM_STATUS, payload: {id: id}})
  }
  
  return (
    <div className="todoItem" onClick={onTodoItemClick}>
      <span className={done ? "todoItemDoneDetail" : "todoItemDetail"}>{text}</span>
      <button className="todoItemDeleteBtn" onClick={onDeleteButtonClick}>❌</button>
    </div>
  )
}

export default TodoItem;