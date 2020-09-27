import { sortTitleAZ, sortTitleZA } from '../constants'

export function getPopular() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}
export function getNowPlaying() {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}
export function getGenres() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}
export function getTopRated() {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}
export function getMovieDetails(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US`)
        .then(response => response.json());
}
export function discoverMovies(additioanlQuery) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=f5d93c41702a89380fdb44fcdc97f9f4&certification_country=US&include_adult=false&include_video=false&with_original_language=en' + additioanlQuery)
        .then(response => response.json());
}

export function searchMovies(searchQuery) {
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US&page=1&include_adult=false&query=' + searchQuery)
        .then(response => response.json());
}

export function parseTmdbResponse(data) {
    let moviePreviewResults = [];
    data.map(item => {
        let poster;
        if (!item.poster_path) {
            poster = "/noPoster.svg"
        } else {
            poster = 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
        }
        let moviePreview = {
            id: item.id,
            poster_path: poster,
            vote_average: item.vote_average,
            title: item.title,
            release_date: item.release_date,
            overview: item.overview,
            backdrop_path: 'https://image.tmdb.org/t/p/w1280/' + item.backdrop_path,
        };
        moviePreviewResults.push(moviePreview);
    })
    return moviePreviewResults;
}

export function formatDate(data, monthFormat) {
    let options = {}
    if (monthFormat) {
        options = { year: 'numeric', month: monthFormat, day: 'numeric' }
    }
    return new Date(data).toLocaleDateString('en-US', options)
}
export function formatTime(data) {
    let hours = Math.round(data / 60);
    let min = data - hours * 60;
    return hours + 'h ' + min + 'm'
}

 // video: https://api.themoviedb.org/3/movie/${id}/videos?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US
//confi: https://api.themoviedb.org/3/configuration?api_key=f5d93c41702a89380fdb44fcdc97f9f4
//https://api.themoviedb.org/3/movie/694919/credits?api_key=f5d93c41702a89380fdb44fcdc97f9f4
