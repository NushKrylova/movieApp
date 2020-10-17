export async function getPopular() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}

export async function getNowPlaying() {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}

export async function getGenres() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}

export async function getTopRated() {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f5d93c41702a89380fdb44fcdc97f9f4')
        .then(response => response.json());
}

export async function getMovieDetails(id: number) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US`)
        .then(response => response.json());
}

export async function discoverMovies(additioanlQuery: string) {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=f5d93c41702a89380fdb44fcdc97f9f4&certification_country=US&include_adult=false&include_video=false&with_original_language=en' + additioanlQuery)
        .then(response => response.json());
}

export async function searchMovies(searchQuery: string) {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US&page=1&include_adult=false&query=' + searchQuery);
    return await response.json();
}

export async function getVideo(id: number) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f5d93c41702a89380fdb44fcdc97f9f4&language=en-US`)
        .then(response => response.json());
}

export function parseListOfMovies(data: Movie[]) {
    let moviePreviewResults: Movie[] = [];
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

export function parseMovie(data: MovieDetails) {
    return {
        id: data.id,
        title: data.title,
        poster_path: 'https://image.tmdb.org/t/p/w500/' + data.poster_path,
        vote_average: data.vote_average,
        release_date: data.release_date,
        overview: data.overview,
        backdrop_path: 'https://image.tmdb.org/t/p/original/' + data.backdrop_path,
        genres: data.genres,
        runtime: data.runtime
    }
}

export function formatDate(date: string, monthFormat?: string) {
    let options = {}
    if (monthFormat) {
        options = { year: 'numeric', month: monthFormat, day: 'numeric' }
    }
    return new Date(parseInt(date)).toLocaleDateString('en-US', options)
}

export function formatTime(value: number) {
    let hours = Math.floor(value / 60);
    let min = value - hours * 60;
    return hours + 'h ' + min + 'm'
}

export type Movie = {
    id: number;
    poster_path: string;
    vote_average: number;
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string;
}

export type MovieDetails = {
    id: number;
    poster_path: string;
    vote_average: number;
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string;
    genres: Genre[];
    runtime: number;
}

export type Genre = {
    id: number;
    name: string;
}

export type Video = {
    site: string;
    key: string;
}
