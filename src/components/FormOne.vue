<template>
	<div id="form-one">
		<h1>Form One</h1>
		<p class="test">Test scss</p>
		<p :class="$style.test">Test module scss</p>
		<input v-model="msg" ref="inputFormOne" />
		<button @click="HandleFocus">Focus</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: "",
		};
	},
	methods: {
		HandleFocus() {
			this.$refs.inputFormOne.focus();
		},
	},
};
</script>
<style lang="sass" module>
@import '../sass/testScss.module.scss'
</style>
