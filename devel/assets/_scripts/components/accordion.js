const Accordion = {
	handler(element) {
		const accordion = element.parentNode;
		const isActive = accordion.classList.contains('active');
		if(isActive) {
            accordion.classList.remove('active')
		} else {
            for(let i = 0; i < this.accordions.length; i++) {
                this.accordions[i].classList.remove('active');
            }
            accordion.classList.add('active');
		}
	},
	init: function () {
        this.accordionsHeader = document.querySelectorAll('.faq__accordion-header');
        this.accordions = document.querySelectorAll('.faq__accordion-panel');
		for(let i = 0; i < this.accordions.length; i++) {
			this.accordionsHeader[i].addEventListener('click',() => this.handler(this.accordionsHeader[i]));
		}
    }
};

Accordion.init();

