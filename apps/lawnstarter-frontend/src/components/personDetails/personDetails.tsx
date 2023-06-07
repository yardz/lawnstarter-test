import { Person } from "@src/services/getPeople";
import Link from "next/link";
import React from "react";
import { Card } from "../card";
import styles from "./personDetails.module.scss";
import { BackToSearch } from "../backToSearch";

interface Props {
	person: Person;
}

export const PersonDetails: React.FC<Props> = ({ person }) => {
	return (
		<Card className={styles.movieDetails}>
			<h1 className={styles.title}>{person.name}</h1>
			<div className={styles.container}>
				<div>
					<h2 className={styles.subtitle}>Details</h2>
					<div className={styles.details}>
						<span>Birth Year</span>: {person.details.birthYear}
						<br />
						<span>Gender</span>: {person.details.gender}
						<br />
						<span>Eye Color</span>: {person.details.eyeColor}
						<br />
						<span>Hair Color</span>: {person.details.hairColor}
						<br />
						<span>Height</span>: {person.details.height}
						<br />
						<span>Mass</span>: {person.details.mass}
						<br />
					</div>
				</div>
				<div>
					<h2 className={styles.subtitle}>Movies</h2>
					{person.movies.map((movie, key) => (
						<React.Fragment key={movie.id}>
							<Link className={styles.link} href={`/movies/${movie.id}`}>
								{movie.name}
							</Link>
							{key < person.movies.length - 1 ? ", " : " "}
						</React.Fragment>
					))}
				</div>
			</div>
			<BackToSearch />
		</Card>
	);
};
