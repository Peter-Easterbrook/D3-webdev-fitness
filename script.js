// DOM elements

const btns = document.querySelectorAll('button');
const form = document.querySelector('form');
const formAct = document.querySelector('form span');
const input = document.querySelector('input');
const error = document.querySelector('.error');

var activity = 'cycling';

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // get activity
    activity = e.target.dataset.activity;
    // remove and add active class
    btns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
    //set id of input field
    input.setAttribute('id', activity);
    // set text of form span
    formAct.textContent = activity;
    // call update function
    update(data);
  });
});

// form submit
form.addEventListener('submit', (e) => {
  // prevent default
  e.preventDefault();
  const time = parseInt(input.value);
  if (time) {
    db.collection('activities')
      .add({
        time,
        activity,
        date: new Date().toDateString(),
      })
      .then(() => {
        error.textContent = '';
        input.value = '';
      });
  } else {
    error.textContent = 'Please enter valid input. ';
  }
});
