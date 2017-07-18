'use strict';

$(function () {
	Chip.init();

	console.log(Chip.addChip($('.chips__input')));
});

// window.addEventListener('DOMContentLoaded', function() {
// 	Chip.init();
// });
'use strict';

var Chip = {
	$input: $('.chips__input'),
	$chip: $('.chip'),
	$wrapper: $('.chips__wrapper'),
	$container: $('.chips__container'),
	$inputWrapper: $('.chips__input-wrapper'),
	currentCount: 0,
	$remover: $('.chip__close'),

	addChip: function addChip(input) {
		var chipVal = input.val();
		if (chipVal.length > 0) {
			Chip.currentCount++;

			var newChip = '<div class="chip" id="chip-' + Chip.currentCount + '">' + '<p class="chip__content">' + chipVal + '</p>' + '<div class="chip__close" onclick="Chip.removeChip($(this))"><i class="fa fa-remove"></i></div></div>';
			// Chip.$container.append(newChip);
			$(newChip).insertBefore(Chip.$inputWrapper);
			input.val('');
		}
	},

	removeChip: function removeChip(elem) {
		elem.parent().remove();
		Chip.currentCount--;
	},

	init: function init() {
		console.log(Chip);
		Chip.$input.on('keypress', function (e) {
			var $this = $(this);
			if (e.which === 13) {
				Chip.addChip($this);
			}
		});

		Chip.$remover.on('click', function () {
			$(this).parent().remove();
		});
	}
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiY2hpcC5qcyJdLCJuYW1lcyI6WyIkIiwiQ2hpcCIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2hpcCIsIiRpbnB1dCIsIiRjaGlwIiwiJHdyYXBwZXIiLCIkY29udGFpbmVyIiwiJGlucHV0V3JhcHBlciIsImN1cnJlbnRDb3VudCIsIiRyZW1vdmVyIiwiaW5wdXQiLCJjaGlwVmFsIiwidmFsIiwibGVuZ3RoIiwibmV3Q2hpcCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaXAiLCJlbGVtIiwicGFyZW50IiwicmVtb3ZlIiwib24iLCJlIiwiJHRoaXMiLCJ3aGljaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRSxZQUFXO0FBQ1pDLE1BQUtDLElBQUw7O0FBRUFDLFNBQVFDLEdBQVIsQ0FBWUgsS0FBS0ksT0FBTCxDQUFhTCxFQUFFLGVBQUYsQ0FBYixDQUFaO0FBQ0EsQ0FKRDs7QUFNQTtBQUNBO0FBQ0E7OztBQ1JBLElBQUlDLE9BQU87QUFDVkssU0FBUU4sRUFBRSxlQUFGLENBREU7QUFFVk8sUUFBT1AsRUFBRSxPQUFGLENBRkc7QUFHVlEsV0FBVVIsRUFBRSxpQkFBRixDQUhBO0FBSVZTLGFBQVlULEVBQUUsbUJBQUYsQ0FKRjtBQUtWVSxnQkFBZVYsRUFBRSx1QkFBRixDQUxMO0FBTVZXLGVBQWMsQ0FOSjtBQU9WQyxXQUFVWixFQUFFLGNBQUYsQ0FQQTs7QUFTVkssVUFBUyxpQkFBVVEsS0FBVixFQUFpQjtBQUN6QixNQUFJQyxVQUFVRCxNQUFNRSxHQUFOLEVBQWQ7QUFDQSxNQUFJRCxRQUFRRSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3ZCZixRQUFLVSxZQUFMOztBQUVBLE9BQUlNLFVBQVUsZ0NBQStCaEIsS0FBS1UsWUFBcEMsR0FBa0QsSUFBbEQsR0FBeUQsMkJBQXpELEdBQXNGRyxPQUF0RixHQUFnRyxNQUFoRyxHQUNiLHNHQUREO0FBRUE7QUFDQWQsS0FBRWlCLE9BQUYsRUFBV0MsWUFBWCxDQUF3QmpCLEtBQUtTLGFBQTdCO0FBQ0FHLFNBQU1FLEdBQU4sQ0FBVSxFQUFWO0FBQ0E7QUFDRCxFQXBCUzs7QUFzQlZJLGFBQVksb0JBQVVDLElBQVYsRUFBZ0I7QUFDM0JBLE9BQUtDLE1BQUwsR0FBY0MsTUFBZDtBQUNBckIsT0FBS1UsWUFBTDtBQUNBLEVBekJTOztBQTJCVlQsT0FBTSxnQkFBWTtBQUNqQkMsVUFBUUMsR0FBUixDQUFZSCxJQUFaO0FBQ0FBLE9BQUtLLE1BQUwsQ0FBWWlCLEVBQVosQ0FBZSxVQUFmLEVBQTJCLFVBQVVDLENBQVYsRUFBYTtBQUN2QyxPQUFJQyxRQUFRekIsRUFBRSxJQUFGLENBQVo7QUFDQSxPQUFHd0IsRUFBRUUsS0FBRixLQUFZLEVBQWYsRUFBbUI7QUFDbEJ6QixTQUFLSSxPQUFMLENBQWFvQixLQUFiO0FBQ0E7QUFDRCxHQUxEOztBQU9BeEIsT0FBS1csUUFBTCxDQUFjVyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVk7QUFDckN2QixLQUFFLElBQUYsRUFBUXFCLE1BQVIsR0FBaUJDLE1BQWpCO0FBQ0EsR0FGRDtBQUdBO0FBdkNTLENBQVgiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG5cdENoaXAuaW5pdCgpO1xuXG5cdGNvbnNvbGUubG9nKENoaXAuYWRkQ2hpcCgkKCcuY2hpcHNfX2lucHV0JykpKVxufSk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4vLyBcdENoaXAuaW5pdCgpO1xuLy8gfSk7IiwidmFyIENoaXAgPSB7XG5cdCRpbnB1dDogJCgnLmNoaXBzX19pbnB1dCcpLFxuXHQkY2hpcDogJCgnLmNoaXAnKSxcblx0JHdyYXBwZXI6ICQoJy5jaGlwc19fd3JhcHBlcicpLFxuXHQkY29udGFpbmVyOiAkKCcuY2hpcHNfX2NvbnRhaW5lcicpLFxuXHQkaW5wdXRXcmFwcGVyOiAkKCcuY2hpcHNfX2lucHV0LXdyYXBwZXInKSxcblx0Y3VycmVudENvdW50OiAwLFxuXHQkcmVtb3ZlcjogJCgnLmNoaXBfX2Nsb3NlJyksXG5cblx0YWRkQ2hpcDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0dmFyIGNoaXBWYWwgPSBpbnB1dC52YWwoKTtcblx0XHRpZiAoY2hpcFZhbC5sZW5ndGggPiAwKSB7XG5cdFx0XHRDaGlwLmN1cnJlbnRDb3VudCsrO1xuXG5cdFx0XHR2YXIgbmV3Q2hpcCA9ICc8ZGl2IGNsYXNzPVwiY2hpcFwiIGlkPVwiY2hpcC0nKyBDaGlwLmN1cnJlbnRDb3VudCArJ1wiPicgKyAnPHAgY2xhc3M9XCJjaGlwX19jb250ZW50XCI+JysgY2hpcFZhbCArICc8L3A+JyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2hpcF9fY2xvc2VcIiBvbmNsaWNrPVwiQ2hpcC5yZW1vdmVDaGlwKCQodGhpcykpXCI+PGkgY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L2k+PC9kaXY+PC9kaXY+Jztcblx0XHRcdC8vIENoaXAuJGNvbnRhaW5lci5hcHBlbmQobmV3Q2hpcCk7XG5cdFx0XHQkKG5ld0NoaXApLmluc2VydEJlZm9yZShDaGlwLiRpbnB1dFdyYXBwZXIpO1xuXHRcdFx0aW5wdXQudmFsKCcnKTtcblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQ2hpcDogZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRlbGVtLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdENoaXAuY3VycmVudENvdW50LS07XG5cdH0sXG5cblx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKENoaXApO1xuXHRcdENoaXAuJGlucHV0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0aWYoZS53aGljaCA9PT0gMTMpIHtcblx0XHRcdFx0Q2hpcC5hZGRDaGlwKCR0aGlzKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdENoaXAuJHJlbW92ZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxufTsiXX0=
