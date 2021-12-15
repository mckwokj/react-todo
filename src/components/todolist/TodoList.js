import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../apis/todos";
import { INIT_TODO } from "../../constants/constants";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response) => {
      dispatch({type: INIT_TODO, payload: response.data})
    })
  })

  return (
    <div className="todoList">
      <p className="todoListTitle">Todo List</p>
      <TodoGroup/>
      <TodoGenerator/>
    </div>
  )
}

export default TodoList;