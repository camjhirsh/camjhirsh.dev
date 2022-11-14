// JQuery //

$( "body" ).append( '<div class="wrapper"> </div>' );
$( ".wrapper" ).append( '<div class="inner spinner"> Spin </div>' );

setTimeout(function() {
  $( ".wrapper" ).append( '<h1 class="inner title"> CAMERON HIRSH </h1>' );
}, 3000)

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


