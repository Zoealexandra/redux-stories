
const initialState = [
  {
    id: 0,
    image: 'http://placekitten.com/200/300'
  }
]

const images = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [
        ...state,
        {
          id: action.id,
          image: action.image
        }
      ]
    default:
      return state
  }
}

export default images
