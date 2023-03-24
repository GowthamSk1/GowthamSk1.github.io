// Change the background color when the user clicks the button
const button = document.querySelector('button');
button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'teal';
});

// Display a message when the user hovers over the image
const image = document.querySelector('img');
image.addEventListener('mouseover', function() {
  alert('Hello! Welcome to my website.');
});
