 let express = require('express')
 let app = express()
 let fsPromise = require('fs-promise')
 let fs = require('fs')
 let fetch = require('node-fetch')
//let asciify = require('asciify-promise')
//
 app.set('view engine','ejs')


 // fetch('https://github.com/')
 //    .then(function(res) {
 //        return res.text();
 //    }).then(function(body) {
 //        console.log(body);
 //    });

 app.all('/', function(request, response) {

//
  fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
      .then(function(res) {
          return res.text();
        }).then(function(body) {
          let gifs = JSON.parse(body);
          //console.log(body);
          //console.log(gifs);
          let myObject = {};
          for(let i=0; i< 10; i++){
            myObject[i] =  gifs.data[i].images.fixed_height.url
          }
          console.log(myObject[0]);
          console.log(myObject);
          //{image: gifs.data[0].images.fixed_height.url}
          // {prop: value}
          response.render('home', myObject);
        })
        .catch(err => res.send('had an error'))

      //  response.render('home', gifs); // send/append gifs to the page
 });

app.listen(3000, function() {
  console.log('listening on 3000');
})
//
// let myObject = {};
// for(let i=0; i< 10; i++){
//   myObject[i] =  gifs.data[i].images.fixed_height.url
// }
// console.log(myObject[0]);
// console.log(myObject);
// //{image: gifs.data[0].images.fixed_height.url}
//
// response.render('home', myObject);

//<img src=" <%= image %> " alt="">
//<%= gifs %>

// let nick = fetch('http://jsonplaceholder.typicode.com/posts/1')
//    .then(function(response){
//        return response.json();
//    })
