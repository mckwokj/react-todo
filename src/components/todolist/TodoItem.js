import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../apis/todos";
import { DELETE_TODO_ITEM_STATUS, UPDATE_TODO_ITEM } from "../../constants/constants";
import { DeleteFilled, EditOutlined} from '@ant-design/icons';
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { Input } from "antd";

const TodoItem = (props) => {

  const {id, done, text} = props.item

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalText, setModalText] = useState("")

  const dispatch = useDispatch()

  const onModalInputChange = (event) => {
    const inputValue = event.target.value
    setModalText(inputValue)
  }

  const onTodoItemClick = () => {
    updateTodo(id, {...props.item, done: !done}).then((response) => {
      dispatch({type: UPDATE_TODO_ITEM, payload: response.data})
      response.data.done ? message.success('Todo item done.') : message.success('Todo item undone.')
    })
  }

  const onDeleteButtonClick = () => {
    deleteTodo(id).then((response) => {
      dispatch({type: DELETE_TODO_ITEM_STATUS, payload: response.data})
    })
  }

  const handleOk = () => {
    updateTodo(id, {...props.item, text: modalText}).then((response) => {
      dispatch({type: UPDATE_TODO_ITEM, payload: response.data})
      setIsModalVisible(false)
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
      <Popconfirm
        title="Are you sure to delete this todo item?"
        onConfirm={onDeleteButtonClick}
        okText="Yes"
        cancelText="No"
      >
        <DeleteFilled style={{color: '#cf1322', fontSize: '20px'}}/>
      </Popconfirm>
      <EditOutlined style={{fontSize: '20px'}} onClick={onTodoItemEdit}/>
      <Modal title="Change todo item content" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Please type in new todo item..." onChange={onModalInputChange}/>
      </Modal>
    </div>
  )
}

export default TodoItem;