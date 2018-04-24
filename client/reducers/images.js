
const initialState = [
  {
    id: 0,
    image: 'http://placekitten.com/200/300',
    description: '',
    tag: []

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
    case 'DEL_IMAGE':
      return state.filter(image => image.image !== action.image)
    case 'ADD_DESCRIPTION':
      return state.map(image => image)
    case 'ADD_TAG':
      return state.map(image => image.tag.push(action.tag))
    default:
      return state
  }
}

export default images
