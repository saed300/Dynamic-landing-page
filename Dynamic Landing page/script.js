// Selecting DOM 
var time = document.querySelector('#time');
var greeting = document.querySelector('#greeting');
var myName = document.querySelector('#name');
var myFocus = document.querySelector('#focus');
var heading = document.querySelector('#heading');

// Main function 
function showtheTime() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var amPM = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  time.innerHTML = `${hours}<span>:</span>${minutes}<span>:</span>${seconds} ${amPM}`;

  setTimeout(showtheTime,1000);
}

// Changing the Background
function addBackground() {

  var today = new Date();
  var hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpeg')";
    greeting.textContent = 'Good Morning';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else if (hours < 18) {
    document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
    greeting.textContent = 'Good Afternoon';
    heading.style.opacity = '1';
    myFocus.style.opacity = '1';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } else {
    document.body.style.backgroundImage = "url('../img/eveningg.jpeg')";
    greeting.textContent = 'Good Evening';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  }
}

// Storing info on local storage

function getName() {
  if (localStorage.getItem('name') === null) {
    myName.textContent = 'Saed';
  } else {
    myName.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      localStorage.setItem('name', e.target.innerText);
      myName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null ) {
    myFocus.textContent = 'To Keep Grinding';
    myFocus.blur();
  } else {
    myFocus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.code === 13) {
      localStorage.setItem('focus', e.target.innerText);
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


myName.addEventListener('keypress', setName);
myName.addEventListener('blur', setName);
myFocus.addEventListener('keypress', setFocus);
myFocus.addEventListener('blur', setFocus);


showtheTime();
addBackground();
getName();
getFocus();










