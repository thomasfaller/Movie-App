$(document).ready(()=>{
  $('.field-wrap').on('submit','#searchForm', (e) => {
    e.preventDefault();
    let $searchText = $('#searchText').val();
    $('#movies').empty();
    getMovies($searchText);
  });
});



function getMovies(search) {
  axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=c082d31257497077fd3ba0047bbd6358&query=' + search)
    .then((response) => {
        for (var i = 0; i < response.data.results.length ; i++ ) {
          var $title = response.data.results[i].original_title;
          var $description = response.data.results[i].overview;
          var $posterUrl = 'https://image.tmdb.org/t/p/w500' + response.data.results[i].poster_path;
          var $noPoster = 'img/dvd_cover.png';
            if (response.data.results[i].poster_path == null) {
            $('.wrapper').append('<div class="cards" style="background-image: url(' + $noPoster + ')"><div class="hover_text"><h3>' + $title + '</h3><p>' + $description + '</p><button>More Info</button></div></div>')
              } else {
              $('.wrapper').append('<div class="cards" style="background-image: url(' + $posterUrl + ')"><div class="hover_text"><h3>' + $title + '</h3><p>' + $description + '</p><button>More Info</button></div></div>')
              }}
    })
    .catch((err) => {
      console.log(err);
    });
}
