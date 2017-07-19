"use strict";
'use strict';

var radios = document.querySelectorAll('input[type="radio"]');
var radioToBeUnchecked = void 0;
for (var i = 0; i < radios.length; i++) {
	radios[i].addEventListener('click', function () {
		if (radioToBeUnchecked === this) {
			this.checked = false;
			radioToBeUnchecked = null;
		} else {
			radioToBeUnchecked = this;
		}
	});
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiYWNjb3JkaW9uLmpzIiwic2xpZGVyLmpzIl0sIm5hbWVzIjpbInJhZGlvcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJhZGlvVG9CZVVuY2hlY2tlZCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsIlNsaWRlciIsInRyYW5zZm9ybUluY3JlbWVudENpcmNsZXMiLCJjdXJyZW50SW5kZXgiLCJwcmV2aW91c0NvdW50IiwibmV4dENvdW50IiwiZWxlbWVudHMiLCJzbGlkZXMiLCJzbGlkZXNMZW5ndGgiLCJ0aXRsZXMiLCJhY2NvcmRpb25zV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJhY2NvcmRpb25zIiwic3dpdGNoU2xpZGUiLCJlbGVtZW50IiwicGFyc2VJbnQiLCJkYXRhc2V0IiwicGFnZSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVtb3ZlIiwic3dpdGNoQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsInByZXBhcmVDb250YWluZXIiLCJ3aWR0aCIsImluaXQiLCJmb3JFYWNoIiwic2xpZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNQSxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBZjtBQUNBLElBQUlDLDJCQUFKO0FBQ0EsS0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUosT0FBT0ssTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3RDSixRQUFPSSxDQUFQLEVBQVVFLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQVk7QUFDL0MsTUFBR0gsdUJBQXVCLElBQTFCLEVBQWdDO0FBQy9CLFFBQUtJLE9BQUwsR0FBZSxLQUFmO0FBQ0FKLHdCQUFxQixJQUFyQjtBQUNBLEdBSEQsTUFHTztBQUNOQSx3QkFBcUIsSUFBckI7QUFDQTtBQUNELEVBUEQ7QUFRQTs7O0FDWEQsSUFBTUssU0FBUztBQUNkQywrQkFBMkIsR0FE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QUFnRGRtQixVQUFNLGdCQUFZO0FBQUE7O0FBQ2pCLGFBQUtyQixRQUFMO0FBQ0EsYUFBS21CLGdCQUFMO0FBQ0EsYUFBS2xCLE1BQUwsQ0FBWXFCLE9BQVosQ0FBb0I7QUFBQSxtQkFBU0MsTUFBTTlCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07QUFDL0Qsc0JBQUtjLFdBQUwsQ0FBaUJnQixLQUFqQjtBQUNBLHNCQUFLTixlQUFMO0FBQ0gsYUFINEIsQ0FBVDtBQUFBLFNBQXBCO0FBSUE7QUF2RGEsQ0FBZjs7QUEwREF0QixPQUFPMEIsSUFBUCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJjb25zdCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxubGV0IHJhZGlvVG9CZVVuY2hlY2tlZDtcclxuZm9yKGxldCBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xyXG5cdHJhZGlvc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmKHJhZGlvVG9CZVVuY2hlY2tlZCA9PT0gdGhpcykge1xyXG5cdFx0XHR0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0cmFkaW9Ub0JlVW5jaGVja2VkID0gbnVsbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJhZGlvVG9CZVVuY2hlY2tlZCA9IHRoaXM7XHJcblx0XHR9XHJcblx0fSlcclxufSIsImNvbnN0IFNsaWRlciA9IHtcclxuXHR0cmFuc2Zvcm1JbmNyZW1lbnRDaXJjbGVzOiAxMTAsXHJcblx0Y3VycmVudEluZGV4OiAwLFxyXG5cdHByZXZpb3VzQ291bnQ6IDAsXHJcblx0bmV4dENvdW50OiAwLFxyXG5cdGVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fc2xpZGVyLWl0ZW0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlc0xlbmd0aCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcclxuXHRcdHRoaXMudGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fdGl0bGUnKTtcclxuXHRcdHRoaXMuYWNjb3JkaW9uc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxX19jb250YWluZXIgPiBhcnRpY2xlJyk7XHJcblx0XHR0aGlzLmFjY29yZGlvbnMgPSB0aGlzLmFjY29yZGlvbnNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX2FjY29yZGlvbicpO1xyXG4gICAgfSxcclxuXHRzd2l0Y2hTbGlkZShlbGVtZW50KSB7XHJcblx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGVsZW1lbnQuZGF0YXNldC5wYWdlIC0gMSk7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0ZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBudWxsO1xyXG5cclxuXHRcdC8qIEdFVCBQUkVWSU9VUyBTSUJMSU5HUyAqL1xyXG5cdFx0Zm9yKGxldCBpID0gdGhpcy5jdXJyZW50SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMucHJldmlvdXNDb3VudCAqIHRoaXMudHJhbnNmb3JtSW5jcmVtZW50Q2lyY2xlc30lKWA7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8qIEdFVCBORVhUIFNJQkxJTkdTICovXHJcbiAgICAgICAgZm9yKGxldCBpID0gdGhpcy5jdXJyZW50SW5kZXggKyAxOyBpIDwgdGhpcy5zbGlkZXNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0aGlzLm5leHRDb3VudCAqIHRoaXMudHJhbnNmb3JtSW5jcmVtZW50Q2lyY2xlc30lKWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dENvdW50ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc3dpdGNoQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHRoaXMudGl0bGVzWzBdLnBhcmVudE5vZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5jdXJyZW50SW5kZXggKiAoMTAwL3RoaXMuc2xpZGVzTGVuZ3RoKX0lKWA7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb25zV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLmN1cnJlbnRJbmRleCAqICgxMDAvdGhpcy5zbGlkZXNMZW5ndGgpfSUpYDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzTGVuZ3RoOyBpKyspIHt0aGlzLmFjY29yZGlvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7fVxyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uc1t0aGlzLmN1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByZXBhcmVDb250YWluZXIoKSB7XHJcbiAgICAgICAgLyogc2V0IHdpZHRoIGRlcGVuZGluZyBvbiB0aGUgY291bnQgb2Ygc2xpZGVzICovXHJcbiAgICAgICAgdGhpcy50aXRsZXNbMF0ucGFyZW50Tm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuc2xpZGVzTGVuZ3RoICogMTAwfSVgO1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uc1dyYXBwZXIuc3R5bGUud2lkdGggPSBgJHt0aGlzLnNsaWRlc0xlbmd0aCAqIDEwMH0lYDtcclxuICAgIH0sXHJcblxyXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZWxlbWVudHMoKTtcclxuXHRcdHRoaXMucHJlcGFyZUNvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5zbGlkZXMuZm9yRWFjaChzbGlkZSA9PiBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdCAgICB0aGlzLnN3aXRjaFNsaWRlKHNsaWRlKTtcclxuXHRcdCAgICB0aGlzLnN3aXRjaENvbnRhaW5lcigpO1xyXG5cdFx0fSkpXHJcblx0fVxyXG59O1xyXG5cclxuU2xpZGVyLmluaXQoKTsiXX0=
