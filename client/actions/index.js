let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

let imageId = 0

export const addImage = (imageUrl) => {
  return {
    type: 'ADD_IMAGE',
    id: imageId++,
    image: imageUrl
  }
}
