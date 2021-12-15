import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <div className="todoList">
      <p className="todoListTitle">Todo List</p>
      <TodoGroup/>
      <TodoGenerator/>
    </div>
  )
}

export default TodoList;