export const API_BASE_URL = "https://api.themoviedb.org/3/";

export const API_HEADER_OPTIONS = {
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFkM2FiODE4YWU2MDQ0NWU5ZmIzNjlhYWY4ZjdiYiIsIm5iZiI6MTcyMDAyNDU3My42OTM0MTMsInN1YiI6IjY2N2MwOTQyYWFjNGMzZDllN2Y5YmEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DFQGJUjyrPI-uD65NpNWo1WklVBPaN_75dbCKU9mW5w",
	},
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/original";

export const CATEGORY = [
	{
		name: "All",
		identifier: "all",
	},
	{
		name: "Movies",
		identifier: "movie",
	},
	{
		name: "Tv",
		identifier: "tv",
	},
];

export const TRENDING_CATEGORY = [
	{
		name: "All",
		identifier: "all",
	},
	{
		name: "Movies",
		identifier: "movie",
	},
	{
		name: "Tv",
		identifier: "tv",
	},
];

export const TIME_WINDOW = [
	{
		name: "Day",
		identifier: "day",
	},
	{
		name: "Week",
		identifier: "week",
	},
];

export const POPULAR_CATEGORY = [
	{
		name: "Tv",
		identifier: "tv",
	},
	{
		name: "Movie",
		identifier: "movie",
	},
];

export const MOVIES_CATEGORY = [
	{
		name: "Now Playing",
		identifier: "now_playing",
	},
	{
		name: "Popular",
		identifier: "popular",
	},
	{
		name: "Top Rated",
		identifier: "top_rated",
	},
	{
		name: "Upcoming",
		identifier: "upcoming",
	},
];

export const TV_SERIES_CATEORY = [
	{
		name: "Airing Today",
		identifier: "airing_today",
	},
	{
		name: "On The Air",
		identifier: "on_the_air",
	},
	{
		name: "Popular",
		identifier: "popular",
	},
	{
		name: "Top Rated",
		identifier: "top_rated",
	},
];

export const TV_MOVIE_CATEGORY_PEOPLE = [
	{
		name: "Tv Credits",
		identifier: "tv",
	},
	{
		name: "Movie Credits",
		identifier: "movie",
	},
]

export const IMDB_LOGO = "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg";

export const WIKI_LOGO = "";

export const INSTAGRAM_LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

export const TWITTER_LOGO = "https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg"