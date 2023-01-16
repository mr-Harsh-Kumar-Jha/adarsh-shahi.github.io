const fetchData = async () => {
	const response = await fetch("./dev-data/projects.json");
	return await response.json();
};

const fetchMoreData = async () => {
	const response = await fetch("./dev-data/extnd-projects.json");
	return await response.json();
};

let flag = false;

const renderProjects = async () => {
	document.querySelector(".project-div").innerHTML = ``;
	const projects = await fetchData();
	document.querySelector(".project-div").classList.add("container");
	document.querySelector(".project-div").classList.remove("more-container");
	projects.forEach((project) => {
		document
			.querySelector(".project-div")
			.appendChild(projectTemplate(project));
	});
	if (flag) {
		document.querySelector(".projects-heading").scrollIntoView({
			behavior: "smooth",
		});
		flag = true
	}
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

renderProjects();

document.querySelector(".projects").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector(".projects-heading").scrollIntoView({
		behavior: "smooth",
	});
});

document.querySelector(".about").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector(".about-heading").scrollIntoView({
		behavior: "smooth",
	});
});

document.querySelector(".see-more-less").addEventListener("click", () => {
	if (document.querySelector(".project-div").classList.contains("container")) {
		document.querySelector(".see-more-less").innerHTML = `See Less`;
		renderMoreProjects();
	} else {
		document.querySelector(".see-more-less").innerHTML = `See More`;
		renderProjects();
	}
});

const renderMoreProjects = async () => {
	document.querySelector(".project-div").innerHTML = ``;
	document.querySelector(".project-div").classList.remove("container");
	document.querySelector(".project-div").classList.add("more-container");
	const div = document.createElement("div");
	div.classList.add("grid-3-cols");
	document.querySelector(".project-div").appendChild(div);
	const projects = await fetchMoreData();
	projects.forEach((project) => {
		document;
		div.appendChild(moreProjectTemplate(project));
	});
	document.querySelector(".projects-heading").scrollIntoView({
		behavior: "smooth",
	});
};

const moreProjectTemplate = (data) => {
	const div = document.createElement("div");
	div.innerHTML = `
						<div class="project grid-2-cols">
							<div class="project-title-desc">
								<h3 class="project-title">${data.title}</h3>
								<div class="code-nav">
									<a class="btn project-live" href="${data.live}">Live</a>
									<a class="btn project-code" href="${data.sourceCode}">Code</a>
								</div>
							</div>
							<img src="${data.img}" alt="" class="project-img" />
							<div class="project-description">
							${data.description}
							</div>
						</div>
						`;
	return div;
};
