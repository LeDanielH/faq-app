function goBack(e) {
	e.preventDefault();
	window.history.back();
}

const backbutton = document.querySelector('.faq__app-back');
backbutton.addEventListener('click', (e) => goBack(e));