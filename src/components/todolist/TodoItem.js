import { useDispatch } from "react-redux";
import { DELETE_TODO_ITEM_STATUS, UPDATE_TODO_ITEM_STATUS } from "../../constants/constants";

const TodoItem = (props) => {

  const dispatch = useDispatch()

  const onTodoItemClick = () => {
    dispatch({type: UPDATE_TODO_ITEM_STATUS, payload: {id: props.item.id, done: !props.item.done }})
  }

  const onDeleteButtonClick = () => {
    dispatch({type: DELETE_TODO_ITEM_STATUS, payload: {id: props.item.id}})
  }
  
  return (
    <div className="todoItem" onClick={onTodoItemClick}>
      <span className={props.item.done === true ? "todoItemDoneDetail" : "todoItemDetail"}>{props.item.text}</span>
      <button className="todoItemDeleteBtn" onClick={onDeleteButtonClick}>x</button>
    </div>
  )
}

export default TodoItem;