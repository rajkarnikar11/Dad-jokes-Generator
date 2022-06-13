<template>
	<div class="home">
		<div class="home__jokes">{{ joke }}</div>
		<button @click="addJoke" class="home__add-jokes">Add Jokes</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "HomeView",
	methods: {
		addJoke() {
			this.$store.dispatch("setCurrentJoke");
		},
	},
	components: {},
	data: () => ({
		// joke: " ",
	}),
	// mounted() {
	// 	this.joke = this.$store.getters.getCurrentJoke;
	// },
	computed: {
		joke() {
			return this.$store.getters.getCurrentJoke;
		},
	},
};
</script>
<style scoped>
.home {
	background-color: aquamarine;
	width: 80%;

	max-width: 600px;
	margin: auto;
	align-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	height: 200px;
	padding: 20px;
}
.home__add-jokes {
	width: 100px;
	background-color: rgb(25, 104, 106);
	border: none;
	padding: 10px;
	border-radius: 50px;
	color: aliceblue;
	cursor: pointer;
}
.home__jokes {
	font-weight: 700;
	text-align: center;
}
</style>
