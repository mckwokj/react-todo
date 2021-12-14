import { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_TODO_ITEM } from "../../constants/constants";
import { v4 as uuidv4 } from "uuid";


const TodoGenerator = (props) => {

  const [detail, setDetail] = useState("")

  const [isDisabled, setIsDisabled] = useState(true)

  const dispatch = useDispatch()

  const onGeneratorInputChange = (event) => {
    const inputValue = event.target.value
    setDetail(inputValue)
    setIsDisabled(inputValue.length === 0)
  }

  const onGeneratorButtonClick = () => {
    dispatch({type: CREATE_TODO_ITEM, payload: {id: uuidv4(), text: detail, done: false}})
    setDetail("")
    setIsDisabled(true)
  }

  return (
    <div>
      <input className="generatorInput" onChange={onGeneratorInputChange} value={detail}/>
      <button className="generatorButton" onClick={onGeneratorButtonClick} disabled={isDisabled}>add</button>
    </div>
  )
}

export default TodoGenerator;