import { useState } from "react";

const TodoGenerator = (props) => {

  const [detail, setDetail] = useState("")

  const [isDisabled, setIsDisabled] = useState(true)


  const onGeneratorInputChange = (event) => {
    const inputValue = event.target.value
    setDetail(inputValue)
    setIsDisabled(inputValue.length === 0)
  }

  const onGeneratorButtonClick = () => {
    props.onGeneratorChange(detail)
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