const TodoItem = (props) => {
  return (
    <div className="todoItem">
      <p className="todoItemDetail">{props.value}</p>
    </div>
  )
}

export default TodoItem;