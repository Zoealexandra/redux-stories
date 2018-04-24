import React from 'react'
import {connect} from 'react-redux'
import {letterFilter} from '../actions'

function filter (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(letterFilter(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const WordSearch = (props) => (
  <input
    placeholder='Enter a letter to filter by'
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      filter(e, props.dispatch)
    }}
  />
)

export default connect()(WordSearch)
