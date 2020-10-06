const PMURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const NMURL='https://api.themoviedb.org/3/movie/now_playing?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';
const UMURL='https://api.themoviedb.org/3/movie/upcoming?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const toprated=document.getElementById('light-slider');
const newrelease=document.getElementById('newrelease');
const upcoming=document.getElementById('upcoming').querySelector('#light-slider');

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
// async function getTV(){
//   const resp=await fetch(TVAPIURL);
//   const responseJSON=await resp.json();

//   console.log(responseJSON);

//   responseJSON.results.forEach(movie=>{
//     const img=document.createElement('img');
//     img.src=IMGPATH+movie.poster_path;

//     document.body.appendChild(img);
//   });

//   return responseJSON;
// }

getMovies();


// getTV();

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
