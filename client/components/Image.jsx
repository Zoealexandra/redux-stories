import React from 'react'

const Image = (props) => (
  <div>
    <img src={props.image}/>
    <p><button onClick={() => {
      deleteButton(props.word, props.dispatch)
    }}>DEL</button></p>
  </div>
)

export default Image
