'use strict';

var card_container = document.getElementById('card-container'),
	cards = document.getElementsByClassName('card'),
	query_divs = document.querySelectorAll('div'),
	query_container = document.querySelector('#card-container'),
	body = document.getElementsByTagName('body');

var i = 100;
var timer = setInterval(function  () {
	card_container.style['background-color'] = 'rgb('
					+ randColor()
					+ ','
					+ randColor()
					+ ','
					+ randColor()
					+ ')';



			function randColor () {
				return Math.floor(Math.random() * 255);
			};

			cards[0].innerHTML = '<h1>' + i + '</h1>';
				cards[0].style['background-color'] = 'rgb('
								+ randColor()
								+ ','
								+ randColor()
								+ ','
								+ randColor()
								+ ')';
	if (i == 0) {
		clearInterval(timer);
	}
	i--
}, 50);

