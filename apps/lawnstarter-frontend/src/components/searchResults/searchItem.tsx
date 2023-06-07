import { MovieList } from "@src/services/getMovies";
import { PersonList } from "@src/services/getPeople";
import { Link } from "../link";
import styles from "./searchItem.module.scss";

interface Props {
	item: MovieList | PersonList;
}

export const SearchItem: React.FC<Props> = ({ item }) => {
	const link =
		item.type === "movie" ? `/movies/${item.id}` : `/people/${item.id}`;

	return (
		<div className={styles.searchItem} data-type={item.type}>
			<div className={styles.title}>{item.name}</div>
			<Link className={styles.link} href={link}>
				See Details
			</Link>
		</div>
	);
};
