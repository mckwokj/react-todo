import { useMemo } from "react";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {

  const todoItems = useMemo(() => (
    props.values.map((itemValue, index) => (<TodoItem className="todoItem" value={itemValue} key={itemValue+index} />))
  ), [props.values])

  return (
    <div className="todoGroup">
      {todoItems}
    </div>
  )
}

export default TodoGroup;