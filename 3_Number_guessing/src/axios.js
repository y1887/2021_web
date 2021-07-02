import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' })

const startGame = async () => {
  const {
    data: { msg }
  } = await instance.post('/start')

  console.log("start!")
  return msg
}

const guess = async (number) => {
  // TODO: Change this to catch error
  // The error message should be: Error: "xx" is not a valid number (1 - 100)
  try {
    const {
      data: { msg }
    } = await instance.get('/guess', { params: { number } })
    // console.log(msg)
    return msg
  }
  catch (err) {
    if (err.message === "Network Error"){
      return "Network Error"
    }
    else{
      // console.error(`Error: ${number} is not a valid number (1 - 100)`)
      return `Error: ${number} is not a valid number (1 - 100)`
    }
  }
}

const restart = async () => {
  const {
    data: { msg }
  } = await instance.post('/restart')

  return msg
}

export { startGame, guess, restart }
