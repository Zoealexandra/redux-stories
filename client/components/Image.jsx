import React from 'react'
import {deleteImage} from '../actions'

function deleteButton (image, dispatch) {
  dispatch(deleteImage(image))
}

const Image = (props) => (
  <div>
    <img src={props.image}/>
    <p><button onClick={() => {
      deleteButton(props.word, props.dispatch)
    }}>DEL</button></p>
  </div>
)

export default Image
