import { PersonDetails } from "@src/components/personDetails";

import { Person, getPerson } from "@src/services/getPeople";
import { NextPageContext } from "next";
import Head from "next/head";

const Movie = ({ person }: { person: Person }) => {
	return (
		<>
			<Head>
				<title>LawnStarter Test - Movie Detail</title>
			</Head>
			<PersonDetails person={person} />
		</>
	);
};

// @ts-ignore
Movie.getInitialProps = async (ctx: NextPageContext) => {
	const person = await getPerson(ctx.query.id as unknown as number);
	return { person };
};

export default Movie;
