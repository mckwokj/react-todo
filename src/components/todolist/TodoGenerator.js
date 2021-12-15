import { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_TODO_ITEM } from "../../constants/constants";
import { addTodoItem } from "../../apis/todos";
import { Button, message } from "antd";


const TodoGenerator = () => {

  const [detail, setDetail] = useState("")

  const dispatch = useDispatch()

  const onGeneratorInputChange = (event) => {
    const inputValue = event.target.value
    setDetail(inputValue)
  }

  const onGeneratorButtonClick = () => {
    addTodoItem({ text: detail, done: false}).then((response) => {
      dispatch({type: CREATE_TODO_ITEM, payload: response.data})
    })
    setDetail("")
    message.success('Created todo item.');
  }

  return (
    <div>
      <input className="generatorInput" onChange={onGeneratorInputChange} value={detail}/>
      <Button type="primary" className="generatorButton" onClick={onGeneratorButtonClick} disabled={detail.length === 0}>add</Button>
    </div>
  )
}

export default TodoGenerator;