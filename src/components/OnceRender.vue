<template>
	<div id="once-render" v-once>
		<h1>Once Render</h1>
	</div>
</template>
<script>
export default {
	mounted() {
		console.log("Mounted component");
	},
	updated() {
		console.log("Updated component");
	},
	unmounted() {
		console.log("Unmounted component");
	},
};
</script>
