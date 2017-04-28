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
 app.get('/', function(request, response) {


//http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
  fetch('https://github.com/')
      .then(function(res) {
          return res.text();
        }).then(function(body) {
          let gifs = body;
          //console.log(body);
          //console.log(gifs);
          response.send(gifs);
        })
        .catch(err => res.send('had an error'))
      //response.send( gifs);
      //  response.render('home', gifs); // send/append gifs to the page
 });

app.listen(3000, function() {
  console.log('listening on 3000');
})



  // <img src="<%= gifs %>"></img>
//<img src=" <%= image %> " alt="">
//<%= gifs %>

// let nick = fetch('http://jsonplaceholder.typicode.com/posts/1')
//    .then(function(response){
//        return response.json();
//    })
