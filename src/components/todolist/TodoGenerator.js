import { useState } from "react";

const TodoGenerator = (props) => {

  const [detail, setDetail] = useState("")

  const [isDisabled, setIsDisabled] = useState(true)


  const onGeneratorInputChange = (event) => {
    setDetail(event.target.value)

    if (event.target.value.length > 0) {
      setIsDisabled(false)
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