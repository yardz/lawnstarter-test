import { useSearchStore } from "@src/stores/search.store";
import { Card } from "../card";
import styles from "./searchBox.module.scss";
import { Button, Input, Radio } from "../form";

interface Props {}

export const SearchBox: React.FC<Props> = ({}) => {
	const { text, type, loading, setText, setType, search } = useSearchStore(
		(state) => state
	);

	const placeholder = {
		people: "e.g. Chewbacca, Yoda, Boba Fett",
		movies: "e.g. A New Hope, The Empire Strikes Back, Return of the Jedi",
	};

	return (
		<Card className={styles.searchBox}>
			<div className={styles.title}>What are you searching for?</div>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					if (loading) return;
					search();
				}}
			>
				<div className={styles.type}>
					<Radio
						label="People"
						value="people"
						checked={type === "people"}
						onChange={() => setType("people")}
					/>
					<Radio
						label="Movies"
						value="movies"
						checked={type === "movies"}
						onChange={() => setType("movies")}
					/>
				</div>
				<div className={styles.text}>
					<Input
						type="text"
						placeholder={placeholder[type]}
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className={styles.submit}>
					<Button type="submit" disabled={!text}>
						{loading ? "Loading..." : "Search"}
					</Button>
				</div>
			</form>
		</Card>
	);
};
