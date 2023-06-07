import styles from "./input.module.scss";
import classNames from "classnames";

interface Props
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

export const Input: React.FC<Props> = ({ className, ...props }) => {
	return <input className={classNames(styles.input, className)} {...props} />;
};
