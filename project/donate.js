// // Checking if login-credentials are valid
// // const myAPIEndpoint = 'https://zurilafinal.herokuapp.com/users';
// //
// // // const login = () => {
// // //   const email = document.querySelector('#email').value;
// // //   const password = document.querySelector('#password').value
// // //
// // //   fetch (myAPIEndpoint, {
// // //     method:'GET',
// // //     // headers:{
// // //     //   'Accept': 'applcation/json',
// // //     //   'Content-Type': 'application/json'
// // //     // },
// // //     // body: JSON.stringify({
// // //     //   "email": email;
// // //     //   "password": password,
// // //     // })
// // //     .then(response => response.json())
// // //     .then(data =>{
// // //       console.log(data);
// // //     });
// // //     document.getElementById('my_form').reset();
// // // };
//
//
// document.querySelector('.login').onclick = login;


//Donation endpoint
const donationEndpoint = 'https://zurilafinal.herokuapp.com/donations';

const addDonation = () => {
  const donation = document.querySelector('#donation').value;
  // const email = document.querySelector('#email').value;

  fetch (donationEndpoint, {
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      // "email": email,
      "value": donation,
    })
  })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
  });
    document.getElementById('second_form').reset();
};

document.querySelector('.donate').onclick = addDonation;

//Countdown Timer
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

//Showing Donation **DOESN'T WORK**
const myAPIEndpoint = 'https://zurilafinal.herokuapp.com/donations';

const getData = () => {
  fetch(myAPIEndpoint)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      const container = document.querySelector('.results');
      container.innerHTML = '';
      for (item of data) {
        container.innerHTML += generateEntryHTML(item);
      // let sum = 0;
      // for (value of data){
      //   sum += value;
      // }
      // console.log(sum);
    }
    });
};

const generateEntryHTML = (donation) => {
  return `
  <div class="donationcard">
    <p>Prize Pool: $${donation.value}</p>
    </div>
  `;
};
getData();
