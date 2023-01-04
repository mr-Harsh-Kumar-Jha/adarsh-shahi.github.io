fetch('./dev-data/projects.json')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data);
})