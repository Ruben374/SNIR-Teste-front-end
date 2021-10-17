import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setIputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code == 'Enter' && inputText !== '') {
      onEnter(inputText)
      setIputText('')
    }
  }
  return (
    <C.container>
      <div className='image'>+</div>
      <input
        type='text'
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={e => setIputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.container>
  )
}
