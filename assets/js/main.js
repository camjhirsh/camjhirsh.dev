
// $( ".wrapper" ).append( '<div class="spinner_container"> </div>' );
// $( ".spinner_container" ).append( '<div class="spinner"> Spin </div>' );

$( ".spinner-container").fadeOut(3000, complete=displayApp);

function displayApp() {
  $( "body" ).append( '<div class="app"> </div>' );
  const $title = $('<h1 class="title"> <span class="first-name"> CAMERON </span> <span class="last-name"> HIRSH </span> </h1>' );
  $title.fadeIn(3000);

}


// setTimeout(function() {
//   $( ".app" ).append( '<br></br>' );
//   $( ".app" ).append( '<h2 class="subtitle"> Developer </h2>' );

//   const html_stuff = ''

// }, 3500)






// setTimeOut(function() {
//   addThing()
// }, 3000)


// function stopSpinner () {
//   const spinnerDiv = document.getElementsByClassName("spinner")[0];
//   spinnerDiv.remove();
// }

// setTimeout(function() {
//   stopSpinner()
// }, 2999);

// setTimeOut(addThing(), 3000);

/*
1. spinner fades out
2. Top three kinda fade in
3. One by one, the 4 links come in

*/


