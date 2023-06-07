import { Link } from "../link";
import styles from "./backToSearch.module.scss";
import classNames from "classnames";

interface Props {}

export const BackToSearch: React.FC<Props> = () => {
	return (
		<Link className={classNames(styles.backToSearch)} href="/">
			Back to Search
		</Link>
	);
};
