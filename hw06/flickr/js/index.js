const search = (ev) => {
    let picture = document.querySelector('input').value;
    let url = `https://www.apitutor.org/flickr/simple/?tags=${picture}`;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    // console.log(data);
  //   document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
    document.querySelector('#output').innerHTML = "";
    for (item of data) {
      const template = `
          <div class="card">
          <div class="photo" style="background-image: url('${item.img_url}')">
            <p class="text">${item.title}</p>
          </div>
        </div>
  `;
  document.querySelector('#output').innerHTML += template;
}
};

document.querySelector('#search').onclick = search;
