const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const mobileMenu = document.querySelector('.nav__menu-mobile');
const burgerBtn = document.querySelector('.nav__burger-box');
const faqItems = document.querySelectorAll('.faq__item');

window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		nav.classList.add('nav--scrolled');
	} else {
		nav.classList.remove('nav--scrolled');
	}
});

const handleNav = () => {
	mobileMenu.classList.toggle('nav__menu-mobile--active');

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('nav__menu-mobile--active');
		});
	});
};

faqItems.forEach((item) => {
	const btn = item.querySelector('.faq__question');

	btn.addEventListener('click', () => {
		faqItems.forEach((i) => {
			if (i !== item) {
				i.classList.remove('faq__item--active');
				i.querySelector('.faq__question').classList.remove(
					'faq__question--active'
				);
			}
		});

		item.classList.toggle('faq__item--active');
		btn.classList.toggle('faq__question--active');
	});
});

