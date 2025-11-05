import { useState, useEffect } from 'react'


export function App() {

  const [savedText, setSavedText] = useState([""])
  const [text, setText] = useState("")


  const addCard = () => {

  }
  // can do this later
  useEffect(() =>
    setSavedText(prevText => [...prevText, newText])
  ), [text]

  useEffect(() => 
    setText(savedText)
  ), []

  const onChangeTextArea = (event) => setText(event.target.value)

  return (
    <>
      <input type="text" value={text} onChange={onChangeTextArea}></input>
      <button onClick={addCard}>create a new card
      </button>
    </>
  )
}


