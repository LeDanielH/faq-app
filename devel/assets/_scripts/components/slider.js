const Slider = {
	transformIncrement: 110,
	currentIndex: 0,
	previousCount: 0,
	nextCount: 0,
	elements: function () {
        this.slides = document.querySelectorAll('.faq__slider-item');
		this.titles = document.querySelectorAll('.faq__title');
    },
	switchSlide: function (element) {
		this.elements();
		this.currentIndex = parseInt(element.dataset.page - 1);
		element.classList.add('active');
		element.style.transform = null;

		/* GET PREVIOUS SIBLINGS */
		for(let i = this.currentIndex - 1; i >= 0; i--) {
            this.previousCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translateX(-${this.previousCount * this.transformIncrement}%)`;
		}

        /* GET NEXT SIBLINGS */
        for(let i = this.currentIndex + 1; i < this.slides.length; i++) {
            this.nextCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translateX(${this.nextCount * this.transformIncrement}%)`;
        }

        this.previousCount = 0;
        this.nextCount = 0;
    },

	init: function () {
		this.elements();
		this.slides.forEach(slide => slide.addEventListener('click', () => this.switchSlide(slide)))
	}
};

Slider.init();