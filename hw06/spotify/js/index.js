const search = (ev) => {
    let artist = document.querySelector('input').value;
    let url = `https://www.apitutor.org/spotify/simple/v1/search?q=${artist}&type=track`;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
  // console.log(data);
  // document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
  document.querySelector('#output').innerHTML = "";
  for (item of data) {
    const template =`
    <div class="card">
      <div class="photo" style="background-image: url('${item.album.image_url}')"></div>
      <iframe class="song" src="https://open.spotify.com/embed?uri=spotify:track:${item.id}&amp;theme=white" frameborder="0" allowtransparency="true" allow="encrypted-media" data-testid="audio-player">
      </iframe>
    </div>
    `;
    document.querySelector('#output').innerHTML += template;
  }
};

document.querySelector('#search').onclick = search;
