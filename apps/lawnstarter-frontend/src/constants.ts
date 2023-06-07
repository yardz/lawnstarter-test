export const API_HOST =
	process.env.NODE_ENV === "production" && typeof window === "undefined"
		? "http://backend:8080"
		: "http://localhost:8080";
