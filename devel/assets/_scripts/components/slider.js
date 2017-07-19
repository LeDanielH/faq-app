const Slider = {
	transformIncrementCircles: 110,
	currentIndex: 0,
	previousCount: 0,
	nextCount: 0,
	elements() {
        this.slides = document.querySelectorAll('.faq__slider-item');
        this.slidesLength = this.slides.length;
		this.titles = document.querySelectorAll('.faq__title');
		this.accordionsWrapper = document.querySelector('.faq__container > article');
		this.accordions = this.accordionsWrapper.querySelectorAll('.faq__accordion');
    },
	switchSlide(element) {
		this.currentIndex = parseInt(element.dataset.page - 1);
		element.classList.add('active');
		element.style.transform = null;

		/* GET PREVIOUS SIBLINGS */
		for(let i = this.currentIndex - 1; i >= 0; i--) {
            this.previousCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translateX(-${this.previousCount * this.transformIncrementCircles}%)`;
		}

        /* GET NEXT SIBLINGS */
        for(let i = this.currentIndex + 1; i < this.slidesLength; i++) {
            this.nextCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = `translateX(${this.nextCount * this.transformIncrementCircles}%)`;
        }

        this.previousCount = 0;
        this.nextCount = 0;
    },

    switchContainer() {
        this.titles[0].parentNode.style.transform = `translateX(-${this.currentIndex * (100/this.slidesLength)}%)`;
        this.accordionsWrapper.style.transform = `translateX(-${this.currentIndex * (100/this.slidesLength)}%)`;
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
		this.slides.forEach(slide => slide.addEventListener('click', () => {
		    this.switchSlide(slide);
		    this.switchContainer();
		}))
	}
};

Slider.init();