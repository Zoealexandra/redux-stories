const initialWordState = [
  {
    id: 0,
    word: 'Pickles'
  }
]

const words = (state = initialWordState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]
    case 'DEL_WORD':
      return state.filter(word => word.word !== action.word)
    default:
      return state
  }
}

export default words