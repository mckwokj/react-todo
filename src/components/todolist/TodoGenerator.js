import { useState } from "react";

const TodoGenerator = (props) => {

  const [detail, setDetail] = useState("")

  const [isDisabled, setIsDisabled] = useState(true)


  const onGeneratorInputChange = (event) => {
    const inputValue = event.target.value
    setDetail(inputValue)

    if (inputValue.length > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
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