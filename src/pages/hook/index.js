import React, { useState, useEffect } from 'react'
import { Button, Input, } from 'antd'

function Test () {

  const [ count, setCount ] = useState(9)

  useEffect(() => {

    document.title = `You click ${ count } times`
  }, [count])

  const [ content, SetContent ] = useState('')
  const [ todos, setTodos ] = useState([{ content: 'learn Hook', times: 'Monday'}])

  function handleInputChange (e) {

    SetContent(e.target.value)
  }

  function handleSubmit () {

    setTodos([
      ...todos,
      { content, times: 'now'}
    ])
    SetContent('')
  }

  return (
    <div>
      <h3>{ count } times</h3>
      <Button type="primary" onClick={ () => { setCount(count + 1) }}> click </Button>
      <br/>

      <Input value={ content } onChange={ handleInputChange } placeholder="Todo Items"></Input>
      <Button type="primary" onClick={ handleSubmit }> submit </Button>
      <ol>
        { todos.map((item, key) => <li key={ key }>{ `${item.times}，${item.content}` }</li>)}
      </ol>
    </div>
  )
}

export default Test