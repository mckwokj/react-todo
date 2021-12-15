import { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_TODO_ITEM } from "../../constants/constants";
import { v4 as uuidv4 } from "uuid";


const TodoGenerator = () => {

  const [detail, setDetail] = useState("")

  const dispatch = useDispatch()

  const onGeneratorInputChange = (event) => {
    const inputValue = event.target.value
    setDetail(inputValue)
  }

  const onGeneratorButtonClick = () => {
    dispatch({type: CREATE_TODO_ITEM, payload: {id: uuidv4(), text: detail, done: false}})
    setDetail("")
  }

  return (
    <div>
      <input className="generatorInput" onChange={onGeneratorInputChange} value={detail}/>
      <button className="generatorButton" onClick={onGeneratorButtonClick} disabled={detail.length === 0}>add</button>
    </div>
  )
}

export default TodoGenerator;