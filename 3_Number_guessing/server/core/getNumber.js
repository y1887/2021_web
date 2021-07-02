let number

function rand (n) { 
  return (Math.floor(Math.random ()*n+1)); 
}

const getNumber = (forceRestart = false) => {
  // TODO:
  // generate a random number if number is undefined or forceRestart is true
  if (typeof number === 'undefined' || forceRestart == true)
  	number = rand(100)
  return number
}

export default getNumber
