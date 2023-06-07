import { API_HOST } from "@src/constants";

export interface Person {
	id: number;
	name: string;
	details: {
		height: string;
		mass: string;
		hairColor: string;
		eyeColor: string;
		birthYear: string;
		gender: string;
	};
	movies: {
		id: number;
		name: string;
	}[];
}

export interface PersonList {
	type: "people";
	id: number;
	name: string;
}

export const getPeopleList = async (text: string): Promise<PersonList[]> => {
	const requestUri = `${API_HOST}/people?search=${encodeURIComponent(text)}`;
	const response = await fetch(requestUri);
	const list = (await response.json()).map((person: PersonList) => ({
		...person,
		type: "people",
	}));
	return list;
};

export const getPerson = async (id: number): Promise<Person[]> => {
	const requestUri = `${API_HOST}/people/${id}`;
	const response = await fetch(requestUri);
	return response.json();
};
