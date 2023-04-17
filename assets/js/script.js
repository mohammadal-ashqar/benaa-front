var maxLength = 83;
var myParagraph = document.getElementById("myParagraph");
var text = myParagraph.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph.textContent = shortenedText;
}

// --------------------------------------------
var maxLength = 83;
var myParagraph2 = document.getElementById("myParagraph2");
var text = myParagraph2.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph2.textContent = shortenedText;
}

// --------------------------------------------
var maxLength = 83;
var myParagraph3 = document.getElementById("myParagraph3");
var text = myParagraph3.textContent;

if (text.length > maxLength) {
  var shortenedText = text.substring(0, maxLength) + "...";
  myParagraph3.textContent = shortenedText;
}

// console.log("Number of characters in <h3>: " + text.length);

// Count Time JS
function makeTimer() {
  var endTime = new Date("november  30, 2021 17:00:00 PDT");
  var endTime = Date.parse(endTime) / 1000;
  var now = new Date();
  var now = Date.parse(now) / 1000;
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $("#days").html(days + "<span>Days</span>");
  $("#hours").html(hours + "<span>Hours</span>");
  $("#minutes").html(minutes + "<span>Minutes</span>");
  $("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () {
  makeTimer();
}, 300);
