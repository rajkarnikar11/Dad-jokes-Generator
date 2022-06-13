<template>
	<Navbar />
	<router-view />
</template>
<script>
import Navbar from "./components/Nav.vue";
export default {
	mounted() {
		this.$store.dispatch("setCurrentJoke");
	},
	components: {
		Navbar: Navbar,
	},
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	text-decoration: none;
	color: #2c3e50;
}
</style>
