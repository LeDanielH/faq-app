const Slider = {
	transformIncrementCircles: 105,
	currentIndex: 0,
	previousCount: 0,
	nextCount: 0,
	scaleNotActive: 0.83,

	elements() {
        this.slides = document.querySelectorAll('.faq__slider-item');
        this.slidesLength = this.slides.length;
		this.titles = document.querySelectorAll('.faq__title');
		this.accordionsWrapper = document.querySelector('.faq__container > article');
		this.accordions = this.accordionsWrapper.querySelectorAll('.faq__accordion');
    },

	setElements() {
		for(let i = 0; i < this.slidesLength; i++) {
			this.titles[i].style.flexBasis = `${100 * (1/this.slidesLength)}%`;
			this.titles[i].style.maxWidth = `${100 * (1/this.slidesLength)}%`;
			this.accordions[i].style.flexBasis = `${100 * (1/this.slidesLength)}%`;
			this.accordions[i].style.maxWidth = `${100 * (1/this.slidesLength)}%`;
		}
	},

	switchSlide(element) {
		this.currentIndex = parseInt(element.dataset.page - 1);
		element.classList.add('active');
		element.removeAttribute("style");

		/* GET PREVIOUS SIBLINGS */
		for(let i = this.currentIndex - 1; i >= 0; i--) {
            this.previousCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translate3d(-${this.previousCount * this.transformIncrementCircles}%, 0, 0) scale(${this.scaleNotActive})`;
		}

        /* GET NEXT SIBLINGS */
        for(let i = this.currentIndex + 1; i < this.slidesLength; i++) {
            this.nextCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translate3d(${this.nextCount * this.transformIncrementCircles}%, 0, 0) scale(${this.scaleNotActive})`;
        }

        this.previousCount = 0;
        this.nextCount = 0;
    },

    switchContainer() {
        this.titles[0].parentNode.style.transform = `translate3d(-${this.currentIndex * (100/this.slidesLength)}%, 0, 0)`;
        this.accordionsWrapper.style.transform = `translate3d(-${this.currentIndex * (100/this.slidesLength)}%, 0, 0)`;
        for (let i = 0; i < this.slidesLength; i++) {this.accordions[i].classList.remove('active');}
        this.accordions[this.currentIndex].classList.add('active');
    },

    prepareContainer() {
        /* set width depending on the count of slides */
        this.titles[0].parentNode.style.width = `${this.slidesLength * 100}%`;
        this.accordionsWrapper.style.width = `${this.slidesLength * 100}%`;
    },

	init: function () {
		this.elements();
		this.prepareContainer();
		this.setElements();
		for (let i = 0; i < this.slidesLength; i++) {
			this.slides[i].addEventListener('click',() => {
				this.switchSlide(this.slides[i]);
				this.switchContainer();
			})
		}
	}
};

Slider.init();