'use strict';

var card_container = document.getElementById('card-container'),
	cards = document.getElementsByClassName('card'),
	query_divs = document.querySelectorAll('div'),
	query_container = document.querySelector('#card-container'),
	body = document.getElementsByTagName('body');



setInterval(function  () {
	card_container.style['background-color'] = 'rgb('
					+ randColor()
					+ ','
					+ randColor()
					+ ','
					+ randColor()
					+ ')';
}, 1000);


for (var i = 0; i < 10; i++) {
	var new_card = document.createElement('div');
		new_card.className = 'card';
	card_container.appendChild(new_card);
};

function randColor () {
	return Math.floor(Math.random() * 255);
};

for (var i = 0; i < cards.length; i++) {
	cards[i].innerHTML = '<h1> I am card <b>NUMBER ' + (i + 1) + '</b></h1>';
	cards[i].style['background-color'] = 'rgb('
					+ randColor()
					+ ','
					+ randColor()
					+ ','
					+ randColor()
					+ ')';
};