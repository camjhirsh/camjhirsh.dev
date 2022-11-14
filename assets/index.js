// Vanilla Javascript //

const body = document.body;

function addThing () {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementsByClassName("wrapper")[0];
  body.insertBefore(newDiv, currentDiv);
}

function stopSpinner () {
  const spinnerDiv = document.getElementsByClassName("spinner")[0];
  spinnerDiv.remove();
}

setTimeout(function() {
  stopSpinner()
}, 2999);

// setTimeOut(addThing(), 3000);

