var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image004.jpg') {
        myImage.setAttribute ('src','images/image003.png');
    } else {
        myImage.setAttribute ('src','images/image004.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome Back, ' + myName + '!';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome Back, ' + storedName + '!';
}
myButton.onclick = function() {
  setUserName();
}