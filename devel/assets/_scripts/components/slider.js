const Slider = {
	slides: document.querySelectorAll('.faq__slider-item'),
	titles: document.querySelectorAll('.faq__title'),
	transformIncrement: 110,
	transformBase: 120,
	currentIndex: 0,

	prepareSlide: function () {
		slidesIndexTotal = this.slides.length - 1;
		if(this.currentIndex > slidesIndexTotal) this.currentIndex = slidesIndexTotal;
		if(this.currentIndex < 0) this.currentIndex = 0;
		for (let i = 0; i < this.slides.length; i++) {this.slides[i].classList.remove('active');}
		this.slides[this.currentIndex].classList.add('active');
		this.slides[this.currentIndex - 1].classList.add('is-left');
		this.slides[this.currentIndex + 1].classList.add('is-right');
	},

	switchSlide: function () {
		slidesIndexTotal = this.slides.length - 1;
		if(this.currentIndex > slidesIndexTotal) this.currentIndex = slidesIndexTotal;
		if(this.currentIndex < 0) this.currentIndex = 0;

		for (let i = 0; i < this.slides.length; i++) {this.slides[i].classList.remove('active');}
		this.slides[this.currentIndex].classList.add('active').classList.remove('is-left', 'is-right');
		this.slides[this.currentIndex-1].classList.add('is-left').classList.remove('is-active', 'is-right');

	},

	slide: function (element) {


		if(element.classList.contains('active')) {

		} else {
			const page = parseInt(element.dataset.page);
			const wrapper = element.parentNode;
			const slides = wrapper.querySelectorAll('.faq__slider-item');
			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				// if(i === page) {
				// 	if([i] > slides.length) return;
				//
				// 	slides[i+1].style.transform = `translateX(${this.transformBase}%)`;
				// 	slides[i+2].style.transform = `translateX(${this.transformBase + this.transformIncrement}%)`;
				// 	slides[i-1].style.transform = `translateX(${-this.transformBase}%)`;
				// 	slides[i-2].style.transform = `translateX(${-this.transformBase - this.transformIncrement}%)`;
				// }
			}
			element.classList.add('active');

		}
		// const wrapper = element.parentNode;
		// const slides = wrapper.querySelectorAll('.faq__slider-item');
		//
		// for (let i = 0; i < slides.length; i++) {
		// 	if(slides[i].classList.contains('active')) {
		// 		for(let y = slides[i]; y < slides.length; i++) {
		// 			console.log[y];
		// 		}
		// 		// slides[i++].style.transform = `translateY(${this.transformBase})`
		// 	}
		// }
	},

	init: function () {
		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].addEventListener('click', (e) => this.slide(this.slides[i].dataset.page));
		}
	}
};

Slider.init();