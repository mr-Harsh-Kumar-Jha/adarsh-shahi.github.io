"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelector(".btn--show-modal");

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1Projects = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
	// e.target == btnScrollTo (the element where the event happens itself)
	// console.log(`****************************`);
	// const s1coords = section1Projects.getBoundingClientRect();
	// console.log(e.target.getBoundingClientRect());
	// console.log(s1coords);

	// current scroll positions from top of page
	// console.log(
	// 	`Current Scroll(X/Y) ${window.pageXOffset} ${window.pageYOffset}`
	// );
	// window.scrollTo(s1coords.x + window.pageXOffset, s1coords.y + window.pageYOffset)

	// window.scrollTo({
	//   left: s1coords.x + window.pageXOffset,
	//   top: s1coords.y + window.pageYOffset,
	//   behavior: 'smooth'
	// })

	section1Projects.scrollIntoView({ behavior: "smooth" });
});

// document.querySelectorAll('.nav__link').forEach(ele => {
//   ele.addEventListener('click', function(e)  {
//     e.preventDefault();
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

// Using Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
	e.preventDefault();

	// match
	if (e.target.classList.contains("nav__link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const operationsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
	const clicked = e.target.closest(".operations__tab");
	if (!clicked) return;
	tabs.forEach((btn) => {
		btn.classList.remove("operations__tab--active");
	});
	clicked.classList.add("operations__tab--active");
	// if(e.target.classList.contains('operations__tab'))
	const dataTab = clicked.getAttribute("data-tab");
	console.log(dataTab);

	operationsContent.forEach((ele) => {
		ele.classList.remove("operations__content--active");
	});

	const activeContent = document.querySelector(
		`.operations__content--` + dataTab
	);
	console.log(activeContent);
	activeContent.classList.add("operations__content--active");
});

const nav = document.querySelector(".nav");

const handleHover = function (e, opacity) {
	if (e.target.classList.contains("nav__link")) {
		const link = e.target;
		const linkSiblings = link.closest(".nav").querySelectorAll(".nav__link");

		const logo = link.closest(".nav").querySelector("img");

		linkSiblings.forEach((el) => {
			if (el !== link) el.style.opacity = opacity;
		});
		logo.style.opacity = opacity;
	}
};

nav.addEventListener("mouseover", function (e) {
	handleHover(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
	handleHover(e, 1);
});
