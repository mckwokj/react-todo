import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {

  const todoItems = useSelector(state => state.todoItems)

  return (
    <div className="todoGroup">
      { todoItems.map(todoItem => (<TodoItem item={todoItem} key={todoItem.id}/>)) }
    </div>
  )
}

export default TodoGroup;