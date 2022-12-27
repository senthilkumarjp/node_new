//npm i give-me-a-joke
const jokes= require('give-me-a-joke');
var colors = require('colors');

jokes.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
});


 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

//cowsay

// var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a cow",
//     e:"pp",
//     T:'U'
   
// }));

