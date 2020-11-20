const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const text = document.querySelector('.container .nav-bar .brand a h1');
const text2 = document.querySelector('.container .nav-bar .nav-list ul .js_text2 a');
const text3 = document.querySelector('.container .nav-bar .nav-list ul .js_text3 a');
const text4 = document.querySelector('.container .nav-bar .nav-list ul .js_text4 a');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 600) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 600) {
		text.style.color = '#000';
	} else {
		text.style.color = '#fff';
	}
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 600) {
		text2.style.color = '#000';
	} else {
		text2.style.color = '#fff';
	}
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 600) {
		text3.style.color = '#000';
	} else {
		text3.style.color = '#fff';
	}
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 600) {
		text4.style.color = '#000';
	} else {
		text4.style.color = '#fff';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
