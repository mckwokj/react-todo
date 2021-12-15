import { useSelector } from "react-redux"

const UndoneList = () => {
  const todoItems = useSelector((state) => state.todoItems.filter(todoItem => todoItem.done === false))

  return (
    <div>
      <p className="todoListTitle">Undone List</p>
        {
          todoItems.length === 0 
          ? <p className="todoItemMessage">No undone items.</p> 
          : todoItems.map(todoItem => <p key={todoItem.id}>{todoItem.text}</p>)
        }
    </div>
  )
}

export default UndoneList