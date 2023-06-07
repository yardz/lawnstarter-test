import styles from "./button.module.scss";
import classNames from "classnames";

interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {}

export const Button: React.FC<Props> = ({ className, ...props }) => {
	return <button className={classNames(styles.button, className)} {...props} />;
};
