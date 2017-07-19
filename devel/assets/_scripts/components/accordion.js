const radios = document.querySelectorAll('input[type="radio"]');
let radioToBeUnchecked;
for(let i = 0; i < radios.length; i++) {
	radios[i].addEventListener('click', function () {
		if(radioToBeUnchecked === this) {
			this.checked = false;
			radioToBeUnchecked = null;
		} else {
			radioToBeUnchecked = this;
		}
	})
}