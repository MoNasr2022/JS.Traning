const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests
async function getJason(url) {
  try {
    const responce = await fetch(url);
    return await responce.json();
  } catch (error) {
    throw error;

  }
}

async function getPplinSpace(url) {
  const data = await getJason(url)

  const profiles = data.people.map(async (person) => {
    const craft = person.craft;
    const profilesJson = await getJason(wikiUrl + person.name)
    return { ...profilesJson, craft };
  });
  return Promise.all(profiles);

}

// Generate the markup for each profile
function generateHTML(data) {
  data.map(person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (person.type === 'standard') {
      section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
      `;
    } else {
      section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";

  getPplinSpace(astrosUrl)
    .then(generateHTML)
    .catch(e => {
      peopleList.innerHTML = `<h3>Somthing went wrong!</h3>`
      console.error(e);
    })
    .finally(() => event.target.remove())
  // generateHTML(astros);


});