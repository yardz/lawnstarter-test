import { Template } from "@src/components/template";
import type { AppProps } from "next/app";

import "@src/styles/normalize.scss";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Template>
			<Component {...pageProps} />
		</Template>
	);
}
