import { API_HOST } from "@src/constants";

export interface Movie {
	id: number;
	name: string;
	openingCrawl: string;
	characters: {
		id: number;
		name: string;
	}[];
}

export interface MovieList {
	type: "movie";
	id: number;
	name: string;
}

export const getMoviesList = async (text: string): Promise<MovieList[]> => {
	const requestUri = `${API_HOST}/movies?search=${encodeURIComponent(text)}`;
	const response = await fetch(requestUri);
	const list = (await response.json()).map((movie: MovieList) => ({
		...movie,
		type: "movie",
	}));
	return list;
};

export const getMovie = async (id: number): Promise<Movie> => {
	const requestUri = `${API_HOST}/movies/${id}`;
	const response = await fetch(requestUri);
	return response.json();
};
