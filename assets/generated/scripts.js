"use strict";
'use strict';

var Accordion = {
	elements: function elements() {
		this.accordions = document.querySelectorAll('.faq__accordion-panel');
	},
	handler: function handler(element) {

		if (element.classList.contains('active')) {
			element.classList.remove('active');
		} else {
			for (var i = 0; i < this.accordions.length; i++) {
				this.accordions[i].classList.remove('active');
			}
			element.classList.add('active');
		}
	},

	init: function init() {
		var _this = this;

		this.elements();
		this.accordions.forEach(function (accordion) {
			return accordion.addEventListener('click', function () {
				return _this.handler(accordion);
			});
		});
	}
};

Accordion.init();
'use strict';

var Slider = {
    transformIncrementCircles: 110,
    currentIndex: 0,
    previousCount: 0,
    nextCount: 0,
    elements: function elements() {
        this.slides = document.querySelectorAll('.faq__slider-item');
        this.slidesLength = this.slides.length;
        this.titles = document.querySelectorAll('.faq__title');
        this.accordionsWrapper = document.querySelector('.faq__container > article');
        this.accordions = this.accordionsWrapper.querySelectorAll('.faq__accordion');
    },
    switchSlide: function switchSlide(element) {
        this.currentIndex = parseInt(element.dataset.page - 1);
        element.classList.add('active');
        element.style.transform = null;

        /* GET PREVIOUS SIBLINGS */
        for (var i = this.currentIndex - 1; i >= 0; i--) {
            this.previousCount++;
            this.slides[i].classList.remove('active');
            this.slides[i].style.transform = 'translateX(-' + this.previousCount * this.transformIncrementCircles + '%)';
        }

        /* GET NEXT SIBLINGS */
        for (var _i = this.currentIndex + 1; _i < this.slidesLength; _i++) {
            this.nextCount++;
            this.slides[_i].classList.remove('active');
            this.slides[_i].style.transform = 'translateX(' + this.nextCount * this.transformIncrementCircles + '%)';
        }

        this.previousCount = 0;
        this.nextCount = 0;
    },
    switchContainer: function switchContainer() {
        this.titles[0].parentNode.style.transform = 'translateX(-' + this.currentIndex * (100 / this.slidesLength) + '%)';
        this.accordionsWrapper.style.transform = 'translateX(-' + this.currentIndex * (100 / this.slidesLength) + '%)';
        for (var i = 0; i < this.slidesLength; i++) {
            this.accordions[i].classList.remove('active');
        }
        this.accordions[this.currentIndex].classList.add('active');
    },
    prepareContainer: function prepareContainer() {
        /* set width depending on the count of slides */
        this.titles[0].parentNode.style.width = this.slidesLength * 100 + '%';
        this.accordionsWrapper.style.width = this.slidesLength * 100 + '%';
    },


    init: function init() {
        var _this = this;

        this.elements();
        this.prepareContainer();
        this.slides.forEach(function (slide) {
            return slide.addEventListener('click', function () {
                _this.switchSlide(slide);
                _this.switchContainer();
            });
        });
    }
};

Slider.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiYWNjb3JkaW9uLmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImVsZW1lbnRzIiwiYWNjb3JkaW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZXIiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpIiwibGVuZ3RoIiwiYWRkIiwiaW5pdCIsImZvckVhY2giLCJhY2NvcmRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiU2xpZGVyIiwidHJhbnNmb3JtSW5jcmVtZW50Q2lyY2xlcyIsImN1cnJlbnRJbmRleCIsInByZXZpb3VzQ291bnQiLCJuZXh0Q291bnQiLCJzbGlkZXMiLCJzbGlkZXNMZW5ndGgiLCJ0aXRsZXMiLCJhY2NvcmRpb25zV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJzd2l0Y2hTbGlkZSIsInBhcnNlSW50IiwiZGF0YXNldCIsInBhZ2UiLCJzdHlsZSIsInRyYW5zZm9ybSIsInN3aXRjaENvbnRhaW5lciIsInBhcmVudE5vZGUiLCJwcmVwYXJlQ29udGFpbmVyIiwid2lkdGgiLCJzbGlkZSJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU1BLFlBQVk7QUFDakJDLFNBRGlCLHNCQUNOO0FBQ1YsT0FBS0MsVUFBTCxHQUFrQkMsU0FBU0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQWxCO0FBQ0EsRUFIZ0I7QUFJakJDLFFBSmlCLG1CQUlUQyxPQUpTLEVBSUE7O0FBRWhCLE1BQUdBLFFBQVFDLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLFFBQTNCLENBQUgsRUFBeUM7QUFDL0JGLFdBQVFDLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO0FBQ1QsR0FGRCxNQUVPO0FBQ0csUUFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLUixVQUFMLENBQWdCUyxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDNUMsU0FBS1IsVUFBTCxD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QyxFQUE0QztBQUFDLGlCQUFLUixVQUFMLENBQWdCUSxDQUFoQixFQUFtQkgsU0FBbkIsQ0FBNkJFLE1BQTdCLENBQW9DLFFBQXBDO0FBQStDO0FBQzVGLGFBQUtQLFVBQUwsQ0FBZ0IsS0FBS2lCLFlBQXJCLEVBQW1DWixTQUFuQyxDQUE2Q0ssR0FBN0MsQ0FBaUQsUUFBakQ7QUFDSCxLQXhDVTtBQTBDWHVCLG9CQTFDVyw4QkEwQ1E7QUFDZjtBQUNBLGFBQUtYLE1BQUwsQ0FBWSxDQUFaLEVBQWVVLFVBQWYsQ0FBMEJILEtBQTFCLENBQWdDSyxLQUFoQyxHQUEyQyxLQUFLYixZQUFMLEdBQW9CLEdBQS9EO0FBQ0EsYUFBS0UsaUJBQUwsQ0FBdUJNLEtBQXZCLENBQTZCSyxLQUE3QixHQUF3QyxLQUFLYixZQUFMLEdBQW9CLEdBQTVEO0FBQ0gsS0E5Q1U7OztBQWdEZFYsVUFBTSxnQkFBWTtBQUFBOztBQUNqQixhQUFLWixRQUFMO0FBQ0EsYUFBS2tDLGdCQUFMO0FBQ0EsYUFBS2IsTUFBTCxDQUFZUixPQUFaLENBQW9CO0FBQUEsbUJBQVN1QixNQUFNckIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUMvRCxzQkFBS1csV0FBTCxDQUFpQlUsS0FBakI7QUFDQSxzQkFBS0osZUFBTDtBQUNILGFBSDRCLENBQVQ7QUFBQSxTQUFwQjtBQUlBO0FBdkRhLENBQWY7O0FBMERBaEIsT0FBT0osSUFBUCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJjb25zdCBBY2NvcmRpb24gPSB7XHJcblx0ZWxlbWVudHMoKSB7XHJcblx0XHR0aGlzLmFjY29yZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxX19hY2NvcmRpb24tcGFuZWwnKTtcclxuXHR9LFxyXG5cdGhhbmRsZXIoZWxlbWVudCkge1xyXG5cclxuXHRcdGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hY2NvcmRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZWxlbWVudHMoKTtcclxuXHRcdHRoaXMuYWNjb3JkaW9ucy5mb3JFYWNoKGFjY29yZGlvbiA9PiBhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZXIoYWNjb3JkaW9uKSkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQWNjb3JkaW9uLmluaXQoKTsiLCJjb25zdCBTbGlkZXIgPSB7XHJcblx0dHJhbnNmb3JtSW5jcmVtZW50Q2lyY2xlczogMTEwLFxyXG5cdGN1cnJlbnRJbmRleDogMCxcclxuXHRwcmV2aW91c0NvdW50OiAwLFxyXG5cdG5leHRDb3VudDogMCxcclxuXHRlbGVtZW50cygpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX3NsaWRlci1pdGVtJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXNMZW5ndGggPSB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcblx0XHR0aGlzLnRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX3RpdGxlJyk7XHJcblx0XHR0aGlzLmFjY29yZGlvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcV9fY29udGFpbmVyID4gYXJ0aWNsZScpO1xyXG5cdFx0dGhpcy5hY2NvcmRpb25zID0gdGhpcy5hY2NvcmRpb25zV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxX19hY2NvcmRpb24nKTtcclxuICAgIH0sXHJcblx0c3dpdGNoU2xpZGUoZWxlbWVudCkge1xyXG5cdFx0dGhpcy5jdXJyZW50SW5kZXggPSBwYXJzZUludChlbGVtZW50LmRhdGFzZXQucGFnZSAtIDEpO1xyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbnVsbDtcclxuXHJcblx0XHQvKiBHRVQgUFJFVklPVVMgU0lCTElOR1MgKi9cclxuXHRcdGZvcihsZXQgaSA9IHRoaXMuY3VycmVudEluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLnByZXZpb3VzQ291bnQgKiB0aGlzLnRyYW5zZm9ybUluY3JlbWVudENpcmNsZXN9JSlgO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvKiBHRVQgTkVYVCBTSUJMSU5HUyAqL1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHRoaXMuY3VycmVudEluZGV4ICsgMTsgaSA8IHRoaXMuc2xpZGVzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0Q291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5uZXh0Q291bnQgKiB0aGlzLnRyYW5zZm9ybUluY3JlbWVudENpcmNsZXN9JSlgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLm5leHRDb3VudCA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIHN3aXRjaENvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLnRpdGxlc1swXS5wYXJlbnROb2RlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuY3VycmVudEluZGV4ICogKDEwMC90aGlzLnNsaWRlc0xlbmd0aCl9JSlgO1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uc1dyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5jdXJyZW50SW5kZXggKiAoMTAwL3RoaXMuc2xpZGVzTGVuZ3RoKX0lKWA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlc0xlbmd0aDsgaSsrKSB7dGhpcy5hY2NvcmRpb25zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO31cclxuICAgICAgICB0aGlzLmFjY29yZGlvbnNbdGhpcy5jdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmVwYXJlQ29udGFpbmVyKCkge1xyXG4gICAgICAgIC8qIHNldCB3aWR0aCBkZXBlbmRpbmcgb24gdGhlIGNvdW50IG9mIHNsaWRlcyAqL1xyXG4gICAgICAgIHRoaXMudGl0bGVzWzBdLnBhcmVudE5vZGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNsaWRlc0xlbmd0aCAqIDEwMH0lYDtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbnNXcmFwcGVyLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zbGlkZXNMZW5ndGggKiAxMDB9JWA7XHJcbiAgICB9LFxyXG5cclxuXHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmVsZW1lbnRzKCk7XHJcblx0XHR0aGlzLnByZXBhcmVDb250YWluZXIoKTtcclxuXHRcdHRoaXMuc2xpZGVzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHQgICAgdGhpcy5zd2l0Y2hTbGlkZShzbGlkZSk7XHJcblx0XHQgICAgdGhpcy5zd2l0Y2hDb250YWluZXIoKTtcclxuXHRcdH0pKVxyXG5cdH1cclxufTtcclxuXHJcblNsaWRlci5pbml0KCk7Il19
