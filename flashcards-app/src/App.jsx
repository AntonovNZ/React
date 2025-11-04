import { useState, useEffect } from 'react'


export function App() {

  const [savedText, setSavedText] = useState([""])
  const [text, setText] = useState("")


  const addCard = () => {
    
  }
  // can do this later
  useEffect(() =>
    setSavedText(savedText.push(text))
  ), [text]

  const onChangeTextArea = (event) => setText((event) => event.target.value)

  return (
    <>
      <input type="text" value={text} onChange={onChangeTextArea}></input>
      <button onClick={addCard}>
      </button>
    </>
  )
}


