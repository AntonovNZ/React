import { useState, useEffect } from 'react'
// import { currentCard } from './currentCard'

export function App() {

  const [memStorage, setMemstorage] = useState([""])
  
  const [savedText, setSavedText] = useState([""])
  const [text, setText] = useState("")
  

  useEffect(() => 
    setSavedText(text),
    pushToMemStorage(savedText)
  ), [text] // will save flashcards when text is changed
  
  const pushToMemStorage = (text) => {

  }
  const onChangeTextArea = (event) => {
    setText(event.target.value)
  }

  return (
    <>
    
      <div>
         <input type="text" value={text} onChange={onChangeTextArea}></input>
      </div>
    </>
  )
}


