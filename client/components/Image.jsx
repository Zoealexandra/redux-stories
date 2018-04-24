import React from 'react'
import {connect} from 'react-redux'
import {addTag, addDescription, deleteImage} from '../actions'

function deleteButton (image, dispatch) {
  dispatch(deleteImage(image))
}

function submitDescription (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addDescription(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

function submitTag (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addTag(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const Image = (props) => (
  <div>
    <img src={props.image}/>
    <button onClick={() => { deleteButton(props.image, props.dispatch) }}>DEL</button>
    <p>{props.description}</p>
    <p>{props.tag[0]}</p>
    <p> Add an image description:
      <input
        placeholder='Enter a description'
        onKeyUp={e => {
        // the connect() call below puts
        // dispatch directly on props
          submitDescription(e, props.dispatch)
        }}
      />
    </p>
    <p> Add an image tag:
      <input
        placeholder='Enter a tag'
        onKeyUp={e => {
        // the connect() call below puts
        // dispatch directly on props
          submitTag(e, props.dispatch)
        }}
      />
    </p>
  </div>
)

export default connect()(Image)
