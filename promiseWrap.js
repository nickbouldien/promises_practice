// callback version

function reverseText(text, callback){
  // begin work section
  let splitText = text.split("")
  let reverseArray = splitText.reverse()

  //begin resolution section
  callback(reverseArray.join(""))
}

function reverseTextPromise(text) {
  return new Promise(function(resolve, reject){
    // being work section
    let splitText = text.split("")
    let reverseArray = splitText.reverse()
    let result = reverseArray.join("")
    // begin resolution section
    resolve(result)
  })
}

function capTextPromise(text) {
  return new Promise(function(resolve, reject){
    // begin work section
    let capText = text.toUpperCase()
    // begin resolution section
    resolve(capText)
  })
}


reverseTextPromise("hello world").then(function(reverersedString) {
  capTextPromise(reverersedString).then(function(capText) {
    console.log(capText)
  })
})
