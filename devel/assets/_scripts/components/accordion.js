const Accordion = {
	elements() {
		this.accordions = document.querySelectorAll('.faq__accordion-panel');
	},
	handler(element) {

		if(element.classList.contains('active')) {
            element.classList.remove('active')
		} else {
            for(let i = 0; i < this.accordions.length; i++) {
                this.accordions[i].classList.remove('active');
            }
            element.classList.add('active');
		}
	},
	init: function () {
		this.elements();
		this.accordions.forEach(accordion => accordion.addEventListener('click', () => this.handler(accordion)));
    }
};

Accordion.init();