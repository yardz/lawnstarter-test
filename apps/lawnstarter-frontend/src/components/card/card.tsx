import styles from "./card.module.scss";
import classNames from "classnames";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
	return <div className={classNames(styles.card, className)}>{children}</div>;
};
