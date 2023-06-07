import { Movie } from "@src/services/getMovies";
import { Card } from "../card";
import styles from "./movieDetails.module.scss";
import Link from "next/link";
import React from "react";
import { BackToSearch } from "../backToSearch";

interface Props {
	movie: Movie;
}

export const MovieDetails: React.FC<Props> = ({ movie }) => {
	return (
		<Card className={styles.movieDetails}>
			<h1 className={styles.title}>{movie.name}</h1>
			<div className={styles.container}>
				<div>
					<h2 className={styles.subtitle}>Opening Crawl</h2>
					<p
						className={styles.crawl}
						dangerouslySetInnerHTML={{ __html: movie.openingCrawl }}
					/>
				</div>
				<div>
					<h2 className={styles.subtitle}>Characters</h2>

					{movie.characters.map((character, key) => (
						<React.Fragment key={character.id}>
							<Link className={styles.link} href={`/people/${character.id}`}>
								{character.name}
							</Link>
							{key < movie.characters.length - 1 ? ", " : " "}
						</React.Fragment>
					))}
				</div>
			</div>
			<BackToSearch />
		</Card>
	);
};
