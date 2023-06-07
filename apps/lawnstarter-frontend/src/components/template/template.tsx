import Head from "next/head";
import { Header } from "./header";
import styles from "./template.module.scss";

interface Props {
	children: React.ReactNode;
}

export const Template: React.FC<Props> = ({ children }) => {
	return (
		<main className={styles.template}>
			<Header />
			<div className={styles.content}>{children}</div>
		</main>
	);
};
