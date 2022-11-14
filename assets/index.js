// Vanilla Javascript //

const body = document.body;

function addThing () {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementsByClassName("wrapper")[0]
  document.body.insertBefore(newDiv, currentDiv);
}

setTimeout(function() {
  addThing()
}, 5000);

// setTimeOut(addThing(), 3000);

// function removeFadeOut( el, speed ) {
//   var seconds = speed/1000;
//   el.style.transition = "opacity "+seconds+"s ease";

//   el.style.opacity = 0;
//   setTimeout(function() {
//       el.parentNode.removeChild(el);
//   }, speed);
// }

// removeFadeOut(document.getElementById('test'), 2000);