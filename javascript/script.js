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


document.querySelectorAll('.nav__link').forEach(ele => {
  ele.addEventListener('click', function(e)  {
    e.preventDefault();
    const id = this.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  })
})

