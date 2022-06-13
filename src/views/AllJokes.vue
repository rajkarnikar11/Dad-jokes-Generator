<template>
	<div class="all-jokes">
		<h1>All Jokes</h1>
		<div class="jokes__container">
			<h4 v-for="(joke, idx) in jokes" :key="idx">
				<span>{{ idx + 1 }} =></span>
				{{ joke }}
			</h4>
		</div>
	</div>
</template>

<style scoped>
.jokes__container {
	margin: 30px;
	background-color: aquamarine;
	padding: 10px;
	border-radius: 20px;
	text-align: left;
}
.jokes__container h4 {
	margin: 15px 0;
}
</style>

<script>
export default {
	computed: {
		jokes() {
			return this.$store.getters.getAllJokes;
		},
	},
	mounted() {},
	updated() {
		console.log(this.$store.state.allJokes);
	},
};
</script>
