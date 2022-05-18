<template>
	<div id="form-one">
		<h1>Form Two</h1>
		<p class="test">Test SCSS file</p>
		<input v-model="msg" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: "",
		};
	},
};
</script>
<style lang="sass">
@import '../sass/test.scss'
</style>
