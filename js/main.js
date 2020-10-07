'use strict'

let popup = document.querySelector('.menu-popup');
let closeBlock =document.querySelector('.close-block');
let burgerBtn = document.querySelector('.menu-icon');
let closeBtn = document.querySelector('.close-btn');

burgerBtn.addEventListener('click', () => {
	popup.classList.add('active');
});

closeBlock.addEventListener('click', () => {
	popup.classList.remove('active');
});

closeBtn.addEventListener('click', () => {
	popup.classList.remove('active');
});