import { useSelector } from "react-redux"

const DoneList = () => {

  const todoItems = useSelector((state) => state.todoItems.filter(todoItem => todoItem.done === true))

  return (
    <div>
      <p className="todoListTitle">Done List</p>
        { 
          todoItems.length === 0 
          ? <p className="todoItemMessage">No done items.</p> 
          : todoItems.map(todoItem => <p key={todoItem.id}>{todoItem.text}</p>)
        }
    </div>
  )
}

export default DoneList