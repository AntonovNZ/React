import { useState } from 'react'

export function currentCard({targetId}) {
  const [currentId, setCurrentId] = useState(1)
  const [findId, setFindId] = useState(0)  

    if (currentId !== findId) {
      setFindId(currentId)
    }


}
