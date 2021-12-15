import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../apis/todos";
import { DELETE_TODO_ITEM_STATUS, UPDATE_TODO_ITEM_STATUS } from "../../constants/constants";
import { DeleteFilled } from '@ant-design/icons';

const TodoItem = (props) => {

  const {id, done, text} = props.item

  const dispatch = useDispatch()

  const onTodoItemClick = () => {
    updateTodo(id, !done).then((response) => {
      dispatch({type: UPDATE_TODO_ITEM_STATUS, payload: response.data})
    })
  }

  const onDeleteButtonClick = () => {
    deleteTodo(id).then((response) => {
      dispatch({type: DELETE_TODO_ITEM_STATUS, payload: response.data})
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onTodoItemEdit = () => {
    setIsModalVisible(true)
  }
  
  return (
    <div className="todoItem">
      <span className={done ? "todoItemDoneDetail" : "todoItemDetail"}  onClick={onTodoItemClick}>{text}</span>
      <DeleteFilled style={{color: '#cf1322', fontSize: '20px'}} onClick={onDeleteButtonClick}/>
      <EditOutlined style={{fontSize: '20px'}} onClick={onTodoItemEdit}/>
      <Modal title="Change todo item content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Please type in new todo item..." onChange={onModalInputChange}/>
      </Modal>
    </div>
  )
}

export default TodoItem;