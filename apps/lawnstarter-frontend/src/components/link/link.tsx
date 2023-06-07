import styles from "./link.module.scss";
import classNames from "classnames";
import NextLink from "next/link";

interface Props {
	href: string;
	className?: string;
	children?: React.ReactNode;
}

export const Link: React.FC<Props> = ({ className, href, children }) => {
	return (
		<NextLink className={classNames(styles.link, className)} href={href}>
			{children}
		</NextLink>
	);
};
