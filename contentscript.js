let userNick = document.getElementsByClassName("layout__header")[0].getElementsByClassName("user-nick")[0].innerHTML;
console.log('Welcome %s', userNick);

// const observer = new MutationObserver(function
//   (mutations) {
//   mutations.forEach(function (mutation) {
//     if (mutation.addedNodes.length) {
//       console.log(mutation.addedNodes[0])
//     }
//   })
// });

const wrongGuesses = document.getElementsByClassName("wrong-guesses__flags")[0];
//.childNodes.length
//const wrongGuessesSelect = document.querySelector("div.wrong-guesses__flags");

// observer.observe(wrongGuesses, {
//   childList: true
// })



// var myElement = $("<div>hello world</div>")[0];

var observer = new MutationObserver(function (mutations) {
  if (document.contains(wrongGuesses)) {
    console.log("It's in the DOM!");
    observer.disconnect();
  }
});

observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });


document.contains(document.getElementsByClassName("wrong-guesses__flags")[0])