let express = require('express')
let app = express()
let fsPromise = require('fs-promise')
let fs = require('fs')


let myPromise = new Promise(function(resolve, reject){
  if(isSuccess){
    resolve("the data")
  }else{
    reject("reason it failed")
  }
})






// function alterText(text){
//
//   function reverseText(text, callback){
//     let splitText = text.split("")
//     let reverseArray = splitText.reverse()
//     callback(reverseArray.join(""))
//   }
//
//   function capitalizeText(text, callback){
//     callback(text.toUpperCase())
//   }
//
//   return new Promise(function(resolve, reject){
//     let selectedUser = users[index]
//
//     if(selectedUser){
//       resolve(selectedUser)
//     }else{
//       reject("Could not resolve user")
//     }
//   })
// }

function alterText(text){
  
  function reverseText(text, callback){
    let splitText = text.split("")
    let reverseArray = splitText.reverse()
    callback(reverseArray.join(""))
  }

  function capitalizeText(text, callback){
    callback(text.toUpperCase())
  }

  return new Promise(function(resolve, reject){
    let selectedUser = users[index]
    if(selectedUser){
      resolve(selectedUser)
    }else{
      reject("Could not resolve user")
    }
  })
}


alterText("this is awesome").then(reverseText).then(capitalizeText).catch(function(result){
  console.log("failed: " + result)
})
