class Api {
  constructor(token) {
    this._token = token;
  }

  getPopularFilms() {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this._token}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  getImage(imagePath) {
    return fetch(`https://image.tmdb.org/t/p/w300/${imagePath}`)
      .then((res) => {        
        return res;
      })
  }

  getPopularShows() {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this._token}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  getFilmInfo(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this._token}&language=en-US`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }
  
}

const AppApi = new Api('241eb29c4fba66739a5a38c31c90fe96');

export default AppApi;