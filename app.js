const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const TVAPIURL = 'https://api.themoviedb.org/3/discover/tv?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';


const toprated=document.getElementById('light-slider');

async function getMovies() {
  const resp = await fetch(APIURL);
  const responseJSON = await resp.json();

  console.log(responseJSON);

  responseJSON.results.forEach(movie => {
    const {poster_path,title,vote_average}=movie;
    const movieEl = document.createElement('li');
    const movieC = document.createElement('div');
    movieC.classList.add('tmovie');
    movieC.innerHTML = `
    <div class="tmovie">
    <img src="${IMGPATH+poster_path}" alt="${title}">
    <div class="tinfo">
      <h5>${title}</h5>
      <span>${vote_average}</span>
    </div>
    </div>
    `;
    movieEl.appendChild(movieC);
    toprated.appendChild(movieEl);
  });

  return responseJSON;
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
    // controls: false
  });
  slider.play();
});
