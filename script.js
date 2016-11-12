'use strict';

var card_container = document.getElementById('card-container'),
	cards = document.getElementsByClassName('card'),
	query_divs = document.querySelectorAll('div'),
	query_container = document.querySelector('#card-container'),
	body = document.getElementsByTagName('body');
console.log(card_container);
console.log(cards);
console.log(query_divs);
console.log(query_container);
console.log(body);


for (var i = 0; i < cards.length; i++) {
	cards[i].innerHTML = '<h1> I am card <b>NUMBER ' + (i + 1) + '</b></h1>';

};