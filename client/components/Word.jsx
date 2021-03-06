import React from 'react'
import {connect} from 'react-redux'
import {deleteWord} from '../actions'

function deleteButton (word, dispatch) {
  dispatch(deleteWord(word))
}

const Word = (props) => (
  <div>
    <p>{props.word}<button onClick={() => {
      deleteButton(props.word, props.dispatch)
    }}>DEL</button></p>
  </div>
)

export default connect()(Word)
