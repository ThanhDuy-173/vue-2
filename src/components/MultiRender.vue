<template>
	<div id="once-render">
		<h1>Multi Render</h1>
	</div>
</template>
<script>
export default {
	mounted() {
		console.log("Mounted Multi component");
	},
	updated() {
		console.log("Updated Multi component");
	},
	unmounted() {
		console.log("Unmounted Multi component");
	},
};
</script>
