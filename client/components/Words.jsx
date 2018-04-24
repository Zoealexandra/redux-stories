import React from 'react'
import {connect} from 'react-redux'

import Word from './Word'
import WordSearch from './WordSearch'

const Words = ({words}) => (
  <div>
    {words.map(word =>
      <Word key={word.id}
        {...word}
      />
    )}
    <WordSearch />
  </div>
)

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Words)
