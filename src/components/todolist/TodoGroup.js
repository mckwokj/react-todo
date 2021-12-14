import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {

  const todoItems = useSelector(state => state.todoItems)

  return (
    <div className="todoGroup">
      { todoItems.map(todoItem => (<TodoItem className="todoItem" item={todoItem} key={todoItem.id}/>)) }
    </div>
  )
}

export default TodoGroup;