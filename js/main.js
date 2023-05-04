const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.burger')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('header__menu--active')
		menuBtn.classList.toggle('header__menu--active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('nav')) {
			menu.classList.remove('header__menu--active')
			menuBtn.classList.remove('header__menu--active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('header__menu--active')
			menuBtn.classList.remove('header__menu--active')
			body.classList.remove('lock')
		})
	})
}

const tabs = document.querySelectorAll(".furniture__link");
const contents = document.querySelectorAll(".furniture__content");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {

		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("furniture__link--active");
		}
		tabs[i].classList.add("furniture__link--active");
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("furniture__content--active");
		}
		contents[i].classList.add("furniture__content--active");
	});
}