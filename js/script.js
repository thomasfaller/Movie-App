
  $(document).on('submit','#searchForm', (e) => {
    $('.wrapper').empty();
    e.preventDefault();
    let $searchText = $('#searchText').val();
    getMovies($searchText);
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
          var $link = 'https://www.themoviedb.org/movie/' + response.data.results[i].id;
          var $rating = response.data.results[i].vote_average;
          var $ratingColor = '#57e32c';

          // rating color generator

          if ($rating <= 4) {
            $ratingColor = '#ff4545';
          } else if ($rating <= 5) {
            $ratingColor = '#ffa534';
          } else if ($rating <= 6) {
            $ratingColor = '#ffe234';
          } else if ($rating <= 7) {
            $ratingColor = '#b7dd29';
          }

          // rating color generator



            if (response.data.results[i].poster_path == null) {
            $('.wrapper').append('<div class="cards" style="background-image: url(' + $noPoster + ')"><div class="hover_text"><h3>' + $title + '</h3><span style="background-color:' + $ratingColor + '">' + $rating + '</span><p>' + $description + '</p><a target="_blank" href=' + $link + ' class="btn btn-info" role="button">More Info</a></div></div>')
              } else {
              $('.wrapper').append('<div class="cards" style="background-image: url(' + $posterUrl + ')"><div class="hover_text"><h3>' + $title + '</h3><span style="background-color:' + $ratingColor + '">' + $rating + '</span><p>' + $description + '</p><a target="_blank" href=' + $link + ' class="btn btn-info " role="button">More Info</a></div></div>')
              }}
    })
    .catch((err) => {
      console.log(err);
    });
}
