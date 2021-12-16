import { List } from "antd"
import { useSelector } from "react-redux"

const UndoneList = () => {
  const todoItems = useSelector((state) => state.todoItems.filter(todoItem => todoItem.done === false))

  return (
    <div className="doneUndoneList">
      <p className="todoListTitle">Undone List</p>
        {
          todoItems.length === 0 
          ? <p className="todoItemMessage">No undone items.</p>  
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

export default UndoneList