import { List } from "antd"
import { useSelector } from "react-redux"

const DoneList = () => {

  const todoItems = useSelector((state) => state.todoItems.filter(todoItem => todoItem.done === true))

  return (
    <div className="doneUndoneList">
      <p className="todoListTitle">Done List</p>
      {
        todoItems.length === 0 
        ? <p className="todoItemMessage">No done items.</p>  
        : <List
          bordered
          dataSource={todoItems}
          renderItem={item => (
            <List.Item>
              {item.text}
            </List.Item>
          )}
        />
      }

    </div>
  )
}

export default DoneList