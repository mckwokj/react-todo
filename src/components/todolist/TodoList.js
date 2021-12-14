import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <div>
      <span className="todoListTitle">Todo List</span>
      <TodoGroup/>
      <TodoGenerator/>
    </div>
  )
}

export default TodoList;