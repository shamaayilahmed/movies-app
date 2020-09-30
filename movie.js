const APIURL='https://api.themoviedb.org/3/discover/movie?api_key=2d21bdf2bd0f6a43f9a0dc995b785d06&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

const IMGPATH='https://image.tmdb.org/t/p/w1280';

async function getMovies(){
  const resp=await fetch(APIURL);
  const responseJSON=await resp.json();

  console.log(responseJSON);

  responseJSON.results.forEach(movie=>{
    const img=document.createElement('img');
    img.src=IMGPATH+movie.poster_path;

    document.body.appendChild(img);
  });

  return responseJSON;
}

getMovies();