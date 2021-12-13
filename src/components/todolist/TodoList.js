import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  const [itemDetails, setItemDetails] = useState(() => [])

  const onGeneratorChange = (itemValue) => {
    setItemDetails([...itemDetails, itemValue])
  }

  return (
    <div>
      <span className="todoListTitle">Todo List</span>
      <TodoGroup values={itemDetails}/>
      <TodoGenerator onGeneratorChange={onGeneratorChange}/>
    </div>
  )
}

export default TodoList;