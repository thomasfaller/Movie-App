$(document).ready(()=>{
  $('#searchForm').on('submit', (e) => {
    let $searchText = $('#searchText').val();
    getMovies($searchText);
    e.preventDefault();
  });
});



function getMovies(search) {
  axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=c082d31257497077fd3ba0047bbd6358&query=' + search)
    .then((response) => {
        for (var i = 0; i < response.data.results.length ; i++ ) {
          $('#movies').append('<div class="col-4 m-0 container"><img class="img-fluid" src="https://image.tmdb.org/t/p/w500' + response.data.results[i].poster_path + '"></img><figcaption>' + response.data.results[i].original_title + '</figcaption></div>')
        }e
    })
    .catch((err) => {
      console.log(err);
    });
}
