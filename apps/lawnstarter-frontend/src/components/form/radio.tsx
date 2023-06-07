import styles from "./radio.module.scss";
import classNames from "classnames";
import { useId } from "react";

interface Props {
	checked: boolean;
	className?: string;
	groupClassName?: string;
	onChange: () => void;
	value: string;
	label: string;
}

export const Radio: React.FC<Props> = ({
	className,
	groupClassName,
	label,
	...props
}) => {
	const id = useId();

	return (
		<div className={classNames(styles.group, groupClassName)}>
			<input
				type="radio"
				id={id}
				className={styles.radio} // classNames(styles.radio, className)
				{...props}
			/>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
