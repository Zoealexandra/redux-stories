let nextWordId = 1

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

let imageId = 1

export const addImage = (imageUrl) => {
  return {
    type: 'ADD_IMAGE',
    id: imageId++,
    image: imageUrl
  }
}

export const deleteWord = (word) => {
  return {
    type: 'DEL_WORD',
    word
  }
}

export const deleteImage = (imageURL) => {
  return {
    type: 'DEL_IMAGE',
    image: imageURL
  }
}

export const letterFilter = (letter) => {
  return {
    type: 'FILTER',
    letter
  }
}
