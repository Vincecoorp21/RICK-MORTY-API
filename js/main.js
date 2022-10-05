//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);
let card = document.getElementById('main-div');

function getFetch() {
  card.innerHTML = '';
  const choice = document.querySelector('input').value;
  console.log(choice);
  const url = `https://rickandmortyapi.com/api/character/?name=${choice}&status=alive`;
  // const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`;
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.results);
      let persons = data.results;
      persons.forEach(person => {
        // console.log(person.name);
        card.innerHTML += `<div class="card col-lg-3 col-xs-12 col-md-6">
      <div class="card-body">
      <h3 class="card-header">${person.name}</h3>
      <h5 class="card-title">${person.status}</h5>
      <img style="height: 200px; width: 100%; display:
      block;" src="${person.image}" alt="Card image">
      </div>
      </div>
      `;
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

// if(data.media_type === "image"){
//   document.querySelector('img').src = data.hdurl
// }else if(data.media_type === 'video'){
//   document.querySelector('iframe').src = data.url
// }else{
//   alert('Media Not Supported - Contact NASA IMMEDIATLY')
// }

// document.querySelector('h3').innerText = data.explanation
