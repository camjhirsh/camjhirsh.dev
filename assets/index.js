// JS

const body = documnet.body;

function hideSpinner () {
  body.getElementsByClassName("title").fadeOut("slow");
}

setTimeOut(hideSpinner(), 3000);