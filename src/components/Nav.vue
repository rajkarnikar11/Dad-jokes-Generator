<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/alljokes">All jokes</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style>
nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	text-decoration: none;
	color: rgb(19, 19, 19, 0.5);

	padding: 5px;
}
nav a:hover {
	color: rgb(66, 185, 131, 0.5);
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
