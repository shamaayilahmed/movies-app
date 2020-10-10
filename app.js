$(window).on("load",() =>{
   $(".spin-wrap").fadeOut("slow");
});
const pre = document.querySelector('.spin-wrap');
function loader() {
  pre.style.display = 'none';
}


const PMURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const NMURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const UMURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';

const PTURL = 'https://api.themoviedb.org/3/tv/popular?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const NTURL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const UTURL = 'https://api.themoviedb.org/3/tv/airing_today?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';

const SEARCHURL = 'https://api.themoviedb.org/3/search/movie?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&query=';
const TSEARCHURL = 'https://api.themoviedb.org/3/search/tv?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&query=';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const toprated = document.getElementById('light-slider');
const newrelease = document.getElementById('newrelease');
const upcoming = document.getElementById('light-slider1');

const ttoprated = document.getElementById('light-slider2');
const tnewrelease = document.getElementById('onair');
const tupcoming = document.getElementById('light-slider3');


const main = document.getElementById('main');
const form = document.querySelector('form');
const search = document.getElementById('search');

const logo = document.getElementById('logo');


getMovies();

getTV();


async function getMovies() {
  const Presp = await fetch(PMURL);
  const PresponseJSON = await Presp.json();

  const Nresp = await fetch(NMURL);
  const NresponseJSON = await Nresp.json();

  const Uresp = await fetch(UMURL);
  const UresponseJSON = await Uresp.json();

  console.log(PresponseJSON);

  PresponseJSON.results.forEach(movie => {
    const { poster_path, title, vote_average,overview,original_language,release_date } = movie;

    const movieEl = document.createElement('li');
    const movieC = document.createElement('div');
    movieC.classList.add('tmovie');


    movieC.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${title}">
    <div class="tinfo">
      <h5>${title}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${release_date} </p>
      ${overview}
    </div>
    `;
    movieEl.appendChild(movieC);
    toprated.appendChild(movieEl);
  });
  // NEW
  NresponseJSON.results.forEach(movie => {
    const { poster_path, title, vote_average,overview,original_language,release_date } = movie;

    const movieEl = document.createElement('div');

    movieEl.classList.add('nmovie');


    movieEl.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${title}">
    <div class="ninfo">
      <h5>${title}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${release_date} </p>
      ${overview}
    </div>
    `;
    newrelease.appendChild(movieEl);
  });

  // upcoming

  UresponseJSON.results.forEach(movie => {
    const { poster_path, title, vote_average,overview,original_language,release_date } = movie;

    const movieEl = document.createElement('li');
    const movieC = document.createElement('div');
    movieC.classList.add('umovie');


    movieC.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${title}">
    <div class="uinfo">
      <h5>${title}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${release_date} </p>
      ${overview}
    </div>
    `;

    movieEl.appendChild(movieC);
    upcoming.appendChild(movieEl);
  });
  return PresponseJSON;
  return NresponseJSON;
  return UresponseJSON;
}

function getColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}

async function getTV() {
  const Presp = await fetch(PTURL);
  const PresponseJSON = await Presp.json();

  console.log(PresponseJSON);
  const Oresp = await fetch(NTURL);
  const OresponseJSON = await Oresp.json();

  const Tresp = await fetch(UTURL);
  const TresponseJSON = await Tresp.json();


  PresponseJSON.results.forEach(tv => {
    const { poster_path, name, vote_average,overview,original_language,first_air_date } = tv;

    const tvEl = document.createElement('li');
    const tvC = document.createElement('div');
    tvC.classList.add('ttv');


    tvC.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${name}">
    <div class="ttinfo">
      <h5>${name}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${first_air_date} </p>
      ${overview}
    </div>
    `;
    tvEl.appendChild(tvC);
    ttoprated.appendChild(tvEl);
  });

  OresponseJSON.results.forEach(tv => {
    const { poster_path, name, vote_average,overview,original_language,first_air_date } = tv;

    const tvEl = document.createElement('div');

    tvEl.classList.add('ontv');


    tvEl.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${name}">
    <div class="oninfo">
      <h5>${name}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${first_air_date} </p>
      ${overview}
    </div>
    `;
    tnewrelease.appendChild(tvEl);
  });

  TresponseJSON.results.forEach(tv => {
    const { poster_path, name, vote_average,overview,original_language,first_air_date } = tv;

    const tvEl = document.createElement('li');
    const tvC = document.createElement('div');
    tvC.classList.add('atv');


    tvC.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${name}">
    <div class="atinfo">
      <h5>${name}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${first_air_date} </p>
      ${overview}
    </div>
    `;

    tvEl.appendChild(tvC);
    tupcoming.appendChild(tvEl);
  });

  return PresponseJSON;
  return OresponseJSON;
  return TresponseJSON;
}


//Slider
$(document).ready(function () {
  var slider = $("#light-slider").lightSlider({
    autoWidth: true,
    loop: true,
    speed: 2000,
    pauseOnHover: true,
    pause: 3000,
    controls: false
  });
  slider.play();
});
$(document).ready(function () {
  var slider = $("#light-slider1").lightSlider({
    autoWidth: true,
    loop: true,
    speed: 2000,
    pauseOnHover: true,
    pause: 2000
  });
  slider.play();
});

//tv
$(document).ready(function () {
  var slider = $("#light-slider2").lightSlider({
    autoWidth: true,
    loop: true,
    speed: 2000,
    pauseOnHover: true,
    pause: 3000,
    controls: false
  });
  slider.play();
});
$(document).ready(function () {
  var slider = $("#light-slider3").lightSlider({
    autoWidth: true,
    loop: true,
    speed: 2000,
    pauseOnHover: true,
    pause: 2000
  });
  slider.play();
});


// search
async function showSearch(term) {

  main.innerHTML = '';

  const Sresp = await fetch(SEARCHURL + term);
  const SresponseJSON = await Sresp.json();

  const STresp = await fetch(TSEARCHURL + term);
  const STresponseJSON = await STresp.json();


  SresponseJSON.results.forEach(term => {
    const { poster_path, title, vote_average ,overview,original_language,first_air_date,release_date} = term;

    const movieEl = document.createElement('div');
    movieEl.id = 'movies';
    movieEl.classList.add('movie');


    movieEl.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${title}">
    <div class="info">
      <h5>${title}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${release_date} </p>
      ${overview}
    </div>
    `;
    main.appendChild(movieEl);
  });

  STresponseJSON.results.forEach(tterm => {
    const { poster_path, name, vote_average } = tterm;

    const tvEl = document.createElement('div');
    tvEl.id = 'tvs';
    tvEl.classList.add('tv');

    tvEl.innerHTML = `
    <img src="${IMGPATH + poster_path}" alt="${name}">
    <div class="info">
      <h5>${name}</h5>
      <span class='${getColor(vote_average)}'>${vote_average}</span>
    </div>
    <div class="view">
    <h4>Overview</h4>
    <p>Language: ${original_language}<br>Release: ${first_air_date} </p>
      ${overview}
    </div>
    `;
    main.appendChild(tvEl);
  });

  return STresponseJSON;
  return SresponseJSON;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    showSearch(searchTerm);

    search.value = '';
  }

});

// logo.addEventListener('click', () => {
//   main.innerHTML = `
//   <section id="movies">
//    <h2>Explore movie</h2>
//     <h4>Top rated</h4>
//     <div id="toprated">
//       <ul id="light-slider"></ul>
//     </div>

//     <h4>New release</h4>
//       <div id="newrelease"> </div>

//       <h4>Upcoming</h4>
//       <div id="upcoming">
//         <ul id="light-slider1"></ul>
//       </div>
//     </section>


//     <!-- TV -->
//     <section id="tvs">

//       <h2>Explore TV</h2>

//       <h4>Top rated</h4>
//       <div id="ttoprated">
//         <ul id="light-slider2">

//         </ul>
//       </div>

//       <h4>On air</h4>
//       <div id="onair">

//       </div>

//       <h4>Airing today</h4>
//       <div id="airtdy">
//         <ul id="light-slider3">

//         </ul>
//       </div>

//     </section>
//   `;
//   getMovies();
//   getTV();
// });
