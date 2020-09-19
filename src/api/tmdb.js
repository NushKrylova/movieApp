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

export function discoverMovies(additioanlQuery) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=f5d93c41702a89380fdb44fcdc97f9f4&certification_country=US&include_adult=false&include_video=false&with_original_language=en' + additioanlQuery)
        .then(response => response.json());

}