import { Card } from "../card";
import { SearchItem } from "./searchItem";
import styles from "./searchResults.module.scss";
import { useSearchStore } from "@src/stores/search.store";

interface Props {}

export const SearchResults: React.FC<Props> = ({}) => {
	const { result, loading } = useSearchStore((state) => state);
	return (
		<Card className={styles.searchResults}>
			<div className={styles.title}>Results</div>
			{(!result || !result.length || loading) && (
				<div className={styles.empty}>
					{loading ? (
						"Loading..."
					) : (
						<>
							There are zero matches.
							<br />
							Use the form to search for People or Movies.
						</>
					)}
				</div>
			)}
			{result?.map((item) => (
				<SearchItem key={item.id} item={item} />
			))}
		</Card>
	);
};
