// the data for our values will be letters
var alphabets = [ 'A', 'B', 'C', 'D', 'E',
              'F', 'G', 'H', 'I', 'J',
               'K', 'L', 'M', 'N', 'O',
               'P', 'Q', 'R', 'S', 'T',
               'U', 'V', 'W', 'X', 'Y', 'Z']

export function generateValues (level) {
  var num = 0
  var results
  if (level === 'Hard') {
    results = duplicateLetters(alphabets, 30)
    results = shuffle(results)
    return results
  } if (level === 'Medium') {
    results = duplicateLetters(alphabets, 20)
    results = shuffle(results)
    return results
  } else {
    results = duplicateLetters(alphabets, 8)
    results = shuffle(results)
    return results
  }
}

function shuffle (arr) {
  // shuffle elements of an array
  var results = arr.slice(0) // copy of the array
  var randomIndex
  var temp
  for (var i = results.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1))

    temp = results[i]
    results[i] = results[randomIndex]
    results[randomIndex] = temp
  }
  return results
}

function duplicateLetters (arr, length) {
  // create an array with elements containing pairs
  var results = []
  for (var i = 0; i < (length/2); i++) {
    results.push(arr[i])
    results.push(arr[i])
  }
  return results
}