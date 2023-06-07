import { NextPageContext } from "next";
import Head from "next/head";
import { Movie, getMovie } from "@src/services/getMovies";
import { MovieDetails } from "@src/components/movieDetails";

const Movie = ({ movie }: { movie: Movie }) => {
	return (
		<>
			<Head>
				<title>LawnStarter Test - Movie Detail</title>
			</Head>
			<MovieDetails movie={movie} />
		</>
	);
};

// @ts-ignore
Movie.getInitialProps = async (ctx: NextPageContext) => {
	const movie = await getMovie(ctx.query.id as unknown as number);
	return { movie };
};

export default Movie;
