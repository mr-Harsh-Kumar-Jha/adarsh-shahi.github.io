const fetchData = async () => {
	const response = await fetch("./dev-data/projects.json");
	return await response.json();
};

const renderProjects = async () => {
	const projects = await fetchData();
	projects.forEach((project) => {
    console.log(project);
		document.querySelector(".container").appendChild(projectTemplate(project))
	});
};

const projectTemplate = (data) => {
  const div = document.createElement('div')
  div.classList.add('display')
  div.classList.add('grid-4-section')
  div.innerHTML =  `
						<h1 class="number">${data.id}</h1>
						<h2 class="title">${data.title}</h2>
						<div class="description">
							<h4 class="description-content">${data.description}
							</h4>
							<div class="navigation">
                <a class="btn" href="${data.live}">See Live</a>
								<a class="btn" href="${data.sourceCode}">Source Code</a>
							</div>
						</div>
						<img class="desc-img" src="${data.img}" alt="" />
  `;
  return div
};

renderProjects();
