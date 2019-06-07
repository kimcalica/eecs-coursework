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
// const donationEndpoint = 'https://zurilafinal.herokuapp.com/donations';
//
// const addDonation = () => {
//   const donation = document.querySelector('#donation').value;
//   // const email = document.querySelector('#email').value;
//
//   fetch (donationEndpoint, {
//     method:'POST',
//     headers:{
//       'Accept':'application/json',
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//       // "email": email,
//       "value": donation,
//     })
//   })
//     .then(response => response.json())
//     .then(data =>{
//       console.log(data);
//   });
//     document.getElementById('second_form').reset();
// };
//
// document.querySelector('.donate').onclick = addDonation;

//Countdown Timer
var deadline = new Date("june 31, 2019 23:59:59").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML = days ;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;
if (t < 0) {
		clearInterval(x);
		document.getElementById("timeover").innerHTML = "The Raffle is Now!";
		document.getElementById("day").innerHTML ='0';
		document.getElementById("hour").innerHTML ='0';
		document.getElementById("minute").innerHTML ='0';
		document.getElementById("second").innerHTML = '0';
  }
}, 1000);

//Adding Donations
const addDonation5 = () => {
  var donation = document.querySelector('.donation').innerHTML;
  var nickel = 0.05
  var donationnew = parseFloat(donation) + parseFloat(nickel);
  document.querySelector('.donation').innerHTML = donationnew.toFixed(2);
};
document.querySelector('.silver').onclick = addDonation5;

const addDonation1 = () => {
  var donation = document.querySelector('.donation').innerHTML;
  var copper = 0.01;
  var donationnew = parseFloat(donation) + parseFloat(copper);
  document.querySelector('.donation').innerHTML = donationnew.toFixed(2);
};
document.querySelector('.bronze').onclick = addDonation1;

const addDonation10 = () => {
  var donation = document.querySelector('.donation').innerHTML;
  var dime = 0.10;
  var donationnew = parseFloat(donation) + parseFloat(dime);
  document.querySelector('.donation').innerHTML = donationnew.toFixed(2);
};
document.querySelector('.gold').onclick = addDonation10;

const addDonation25 = () => {
  var donation = document.querySelector('.donation').innerHTML;
  var quarter = 0.25;
  var donationnew = parseFloat(donation) + parseFloat(quarter);
  document.querySelector('.donation').innerHTML = donationnew.toFixed(2);
};
document.querySelector('.gold2').onclick = addDonation25;

//Showing Donation **DOESN'T WORK**
// const myAPIEndpoint = 'https://zurilafinal.herokuapp.com/donations';
//
// const getData = () => {
//   fetch(myAPIEndpoint)
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data);
//       const container = document.querySelector('.results');
//       container.innerHTML = '';
//       for (item of data) {
//         container.innerHTML += generateEntryHTML(item);
//       // let sum = 0;
//       // for (value of data){
//       //   sum += value;
//       // }
//       // console.log(sum);
//     }
//     });
// };
//
// const generateEntryHTML = (donation) => {
//   return `
//   <div class="donationcard">
//     <p>Prize Pool: $${donation.value}</p>
//     </div>
//   `;
// };
// getData();
