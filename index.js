const fetchData = async () => {
	const response = await fetch("./dev-data/projects.json");
	return await response.json();
};

const renderProjects = async () => {
	const projects = await fetchData();
	projects.forEach((project) => {
		document
			.querySelector(".projects-section .container")
			.appendChild(projectTemplate(project));
	});
};

const projectTemplate = (data) => {
	const div = document.createElement("div");
	div.classList.add("display");
	div.classList.add("grid-4-section");
	div.innerHTML = `
						<h1 class="number">${data.id}</h1>
						<h2 class="title">${data.title}</h2>
						<div class="description">
							<h4 class="description-content">${data.description}
							</h4>
							<div class="navigation">
                <a target="_blank" class="btn" href="${data.live}">See Live</a>
								<a target="_blank" class="btn" href="${data.sourceCode}">Source Code</a>
							</div>
						</div>
						<img class="desc-img" src="${data.img}" alt="" />
  `;
	return div;
};

renderProjects()

document.querySelector('.projects').addEventListener('click', e => {
	e.preventDefault()
	document.querySelector('.projects-heading').scrollIntoView({
		behavior: "smooth"
	})
})


document.querySelector('.about').addEventListener('click', e => {
	e.preventDefault()
	document.querySelector('.about-heading').scrollIntoView({
		behavior: "smooth"
	})
})

document/querySelector('.get-in-touch').addEventListener('click', e => {
	location.href = ''
})