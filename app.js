$(window).on("load",() =>{
    $(".spin-wrap").fadeOut("slow");
  });


const PMURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const NMURL='https://api.themoviedb.org/3/movie/now_playing?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const UMURL='https://api.themoviedb.org/3/movie/upcoming?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';

const PTURL='https://api.themoviedb.org/3/tv/popular?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const NTURL='https://api.themoviedb.org/3/tv/on_the_air?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const UTURL='https://api.themoviedb.org/3/tv/airing_today?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const toprated=document.getElementById('light-slider');
const newrelease=document.getElementById('newrelease');
const upcoming=document.getElementById('light-slider1');

const ttoprated=document.getElementById('light-slider2');
const tnewrelease=document.getElementById('onair');
const tupcoming=document.getElementById('light-slider3');


async function getMovies() {
  const Presp = await fetch(PMURL);
  const PresponseJSON = await Presp.json();

  const Nresp=await fetch(NMURL);
  const NresponseJSON=await Nresp.json();

  const Uresp=await fetch(UMURL);
  const UresponseJSON=await Uresp.json();  

  console.log(PresponseJSON);

  PresponseJSON.results.forEach(movie => {
    const {poster_path,title,vote_average}=movie;

    const movieEl = document.createElement('li');
    const movieC = document.createElement('div');
    movieC.classList.add('tmovie');


    movieC.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${title}">
    <div class="tinfo">
      <h5>${title}</h5>
      <span>${vote_average}</span>
    </div>
    `;
    movieEl.appendChild(movieC);
    toprated.appendChild(movieEl);
  });
// NEW
  NresponseJSON.results.forEach(movie => {
    const {poster_path,title,vote_average}=movie;

    const movieEl = document.createElement('div');
    
    movieEl.classList.add('nmovie');


    movieEl.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${title}">
    <div class="ninfo">
      <h5>${title}</h5>
      <span>${vote_average}</span>
    </div>
    `;
    newrelease.appendChild(movieEl);
  });

  // upcoming

  UresponseJSON.results.forEach(movie => {
    const {poster_path,title,vote_average}=movie;

    const movieEl = document.createElement('li');
    const movieC = document.createElement('div');
    movieC.classList.add('umovie');


    movieC.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${title}">
    <div class="uinfo">
      <h5>${title}</h5>
      <span>${vote_average}</span>
    </div>
    `;
  
    movieEl.appendChild(movieC);
    upcoming.appendChild(movieEl);
  });
  return PresponseJSON;
  return NresponseJSON;
  return UresponseJSON;
}

async function getTV(){
  const Presp=await fetch(PTURL);
  const PresponseJSON=await Presp.json();

  const Oresp=await fetch(NTURL);
  const OresponseJSON=await Oresp.json();

  const Tresp=await fetch(UTURL);
  const TresponseJSON=await Tresp.json();


  PresponseJSON.results.forEach(tv => {
    const {poster_path,name,vote_average}=tv;

    const tvEl = document.createElement('li');
    const tvC = document.createElement('div');
    tvC.classList.add('ttv');


    tvC.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${name}">
    <div class="ttinfo">
      <h5>${name}</h5>
      <span>${vote_average}</span>
    </div>
    `;
    tvEl.appendChild(tvC);
    ttoprated.appendChild(tvEl);
  });

  OresponseJSON.results.forEach(tv => {
    const {poster_path,name,vote_average}=tv;

    const tvEl = document.createElement('div');
    
    tvEl.classList.add('ontv');


    tvEl.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${name}">
    <div class="oninfo">
      <h5>${name}</h5>
      <span>${vote_average}</span>
    </div>
    `;
    tnewrelease.appendChild(tvEl);
  });

  TresponseJSON.results.forEach(tv => {
    const {poster_path,name,vote_average}=tv;

    const tvEl = document.createElement('li');
    const tvC = document.createElement('div');
    tvC.classList.add('atv');


    tvC.innerHTML = `
    <img src="${IMGPATH+poster_path}" alt="${name}">
    <div class="atinfo">
      <h5>${name}</h5>
      <span>${vote_average}</span>
    </div>
    `;
  
    tvEl.appendChild(tvC);
    tupcoming.appendChild(tvEl);
  });

  return PresponseJSON;
  return OresponseJSON;
  return TresponseJSON;
}


getMovies();
getTV();




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