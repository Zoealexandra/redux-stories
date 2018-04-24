import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../actions'

function deleteButton (e, dispatch) {
  dispatch(deleteWord(e.currentTarget.value))
  e.currentTarget.value = ''
}

const Word = (props) => (
  <div>
    <p>{props.word}<button onClick={e => {
      deleteButton(e, props.dispatch)
    }}>DEL</button></p>
  </div>
)

export default connect()(Word)
