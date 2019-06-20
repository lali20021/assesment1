//1. Write the code that returns 'B' from mantra.

var mantra = "Be the dev";
var newMantra = mantra.charAt(0);
console.log(newMantra)

//2.Write the code that determines if there is a 'x' in mantra.
var mantra = "Be the dev";
var search = mantra.includes("v")
console.log(search)

//3. Write the code that determines if there is a 'v' in mantra.
var mantra = "Be the dev";
var searchV = mantra.includes("v")
console.log(searchV)

//Stretch: Write the code that returns the position of 'v' in mantra.
var mantra = "Be the dev";
var position = mantra.indexOf("v")
console.log(position)

//6a Write the code that logs each letter of mantra using a for loop.
var mantra = "Be the dev";
for(let i=0; i<mantra.length; i++){
  console.log(mantra.charAt(i));
}

// Stretch: Write the code that logs each letter of mantra using a while loop
var mantra = "Be the dev";
var i = 0;
while(i <= mantra.length){
  i++;
  console.log(mantra.charAt(i-1));
}

Super Stretch: Write the code that logs each letter of mantra using forEach()
var mantra = "Be the dev";
mantra.split("").forEach(letter => {
console.log(letter);
});

7. Write a function that takes a string like message as an argument and returns the string without vowels.
var message = "thisisateststring"
function noVowels(str) {
  var newMessage = str.split('')
  let newArr =[]
  for(let i=0; i<newMessage.length; i++){
    if (newMessage[i] === "a" || newMessage[i] === "e" || newMessage[i] === "i" || newMessage[i] === "o" || newMessage[i] === "u" ){
      newMessage.splice(i,1)
    }
  }
  return newMessage.join('')
}
  console.log(noVowels(message))

  var message = "thisisateststring"
  function noVowels(str) {
    var newMessage = str.split('')
    let newArr =[]

    for(let i=0; i<newMessage.length; i++){
      if (newMessage[i] !== "a" && newMessage[i] !== "e" && newMessage[i] !== "i" && newMessage[i] !== "o" && newMessage[i] !== "u" ){
        newArr.push(newMessage[i])
      }
    }
    return newArr.join('')
  }
    console.log(noVowels(message))


Stretch: Update your function to throw an exception if the argument is not a string.

Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.


Consider the following variable:
8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

var toonimals = [ {name: 'Itchy', animal: 'mouse'},
                  {name: 'Stimpy', animal: 'cat'},
                  {name: 'Daffy', animal: 'duck'},
                  {name: 'Scratchy', animal: 'cat'},
                  {name: 'Ren', animal: 'dog'},
                  {name: 'Felix', animal: 'cat'}]

function catsOnly(arr) {
  var newArr = []
  for(let i=0; i<arr.length; i++){
    if(arr[i].animal ==='cat'){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(catsOnly(toonimals));
