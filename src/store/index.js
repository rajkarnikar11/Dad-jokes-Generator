import { createStore } from "vuex";

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default createStore({
	state: {
		currentJoke: " current joke from the store",
		allJokes: [],
	},
	getters: {
		getCurrentJoke(state) {
			return state.currentJoke;
		},
		getAllJokes(state) {
			return state.allJokes;
		},
	},
	mutations: {
		setCurrentJoke(state, payload) {
			state.currentJoke = payload;
			state.allJokes.push(payload);
		},
	},
	actions: {
		async setCurrentJoke(state) {
			const joke = await fetch(url, { headers });
			const j = await joke.json();

			state.commit("setCurrentJoke", j.joke);
		},
	},
	modules: {},
});
