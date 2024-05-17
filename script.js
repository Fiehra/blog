let h1 = document.querySelector('h1');
let button = document.getElementById('header-button');
let scrollButton = document.getElementById('scrolltop');

button.addEventListener('click', function() {
	h1.textContent = 'finally learning javascript'
});

scrollButton.addEventListener('click', function() {
	window.scrollTo({top:0, behavior: 'smooth'});
});
