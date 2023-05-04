// Retrieving user data from localStorage
let userData = JSON.parse(localStorage.getItem('userData'));

// DOM elements
let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let dobElement = document.getElementById('dob');
let contactElement = document.getElementById('contact');
let updateButton = document.getElementById('update');

// Populating DOM elements with user data
nameElement.innerText = userData.name;
ageElement.innerText = userData.age;
dobElement.innerText = userData.dob;
contactElement.innerText = userData.contact;

// Updating user data on button click
updateButton.addEventListener('click', () => {
  // Retrieving updated user data from input fields
  let updatedName = document.getElementById('name-input').value;
  let updatedAge = document.getElementById('age-input').value;
  let updatedDob = document.getElementById('dob-input').value;
  let updatedContact = document.getElementById('contact-input').value;

  // Updating user data in localStorage
  userData.name = updatedName;
  userData.age = updatedAge;
  userData.dob = updatedDob;
  userData.contact = updatedContact;

  localStorage.setItem('userData', JSON.stringify(userData));

  // Updating DOM elements with updated user data
  nameElement.innerText = userData.name;
  ageElement.innerText = userData.age;
  dobElement.innerText = userData.dob;
  contactElement.innerText = userData.contact;
});
