import React from 'react'
import {connect} from 'react-redux'
import {addImage} from './actions'

function submitImageUrl (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addImage(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddImage = (props) => (
  <input
    placeholder='Enter an image URL'
    onKeyUp={e => {
      submitImageUrl(e, props.dispatch)
    }}
  />
)

export default connect()(AddImage)
