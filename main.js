// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
document.getElementById("modal").classList.add("hidden");

// Your JavaScript code goes here!


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  document.getElementById("modal").classList.add("hidden");
  
    document.getElementsByClassName("like-glyph")[0].onclick = function (){
    document.getElementsByClassName("like-glyph")[0].classList.toggle("activated-heart")

    mimicServerCall().then(resp => {
      document.getElementsByClassName("like-glyph")[0].classList.toggle("activated-heart")


    }) .catch(err =>{
      document.getElementById("modal").classList.remove("hidden");
      setTimeout(function(){ 
        document.getElementById("modal").classList.add("hidden")
      } ,3000)
    })

    
    
  }
  
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
