import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  const [numberOfTodoItems, setNumberOfTodoItems] = useState(0)

  const [itemDetails, setItemDetails] = useState(() => [])

  const onGeneratorChange = (itemValue) => {
    setNumberOfTodoItems(numberOfTodoItems + 1)
    setItemDetails([...itemDetails, itemValue])
  }

  return (
    <div>
      <span className="todoListTitle">Todo List</span>
      <TodoGroup values={itemDetails} size={numberOfTodoItems}/>
      <TodoGenerator onGeneratorChange={onGeneratorChange}/>
    </div>
  )
}

export default TodoList;