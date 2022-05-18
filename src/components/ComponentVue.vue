<template>
	<div id="component">
		<input v-model="searchText" />
		<input
			v-bind:value="searchText"
			v-on:input="searchText = $event.target.value"
		/>
		<CustomInput
			v-bind:value="searchText"
			v-on:input="searchText = $event"
		></CustomInput>
	</div>
</template>
<script>
import CustomInput from "./CustomInput.vue";
export default {
	data() {
		return {
			searchText: "",
		};
	},
	components: {
		CustomInput,
	},
};
</script>
