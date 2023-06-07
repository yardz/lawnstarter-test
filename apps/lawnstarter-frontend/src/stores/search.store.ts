import { MovieList, getMoviesList } from "@src/services/getMovies";
import { PersonList, getPeopleList } from "@src/services/getPeople";
import { create } from "zustand";

interface SearchStore {
	text: string;
	type: "people" | "movies";
	loading: boolean;
	result?: MovieList[] | PersonList[];
	setText: (text: string) => void;
	setType: (type?: "people" | "movies") => void;
	search: () => Promise<void>;
	clear: () => void;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
	text: "",
	type: "people",
	loading: false,
	clear: () => set({ text: "", type: "people", result: undefined }),
	setText: (text: string) => set({ text }),
	setType: (type) => set({ type }),
	search: async () => {
		const { type, text } = get();
		if (!text) return;
		if (!type) return;
		if (!["people", "movies"].includes(type)) return;

		set({ loading: true, result: undefined });
		if (type === "movies") {
			const movies = await getMoviesList(text);
			set({ result: movies });
		}
		if (type === "people") {
			const people = await getPeopleList(text);
			set({ result: people });
		}

		set({ loading: false });
	},
}));
