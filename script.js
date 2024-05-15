let h1 = document.querySelector('h1');
let button = document.getElementById('header-button');

button.addEventListener('click', function() {
	h1.textContent = 'finally learning javascript'
	console.log('Button was clicked!');
});
