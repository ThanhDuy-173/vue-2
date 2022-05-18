<template>
	<div id="title">
		<input v-model="newTitle" @change="ChangeTitle" />
		<h1>{{ title }}</h1>
		<button @click="ChangeTitle">Change Title</button>
	</div>
</template>
<script>
export default {
	name: "title-sync",
	data() {
		return {
			newTitle: "",
		};
	},
	props: {
		title: String,
	},
	methods: {
		ChangeTitle(e) {
			console.log(this.newTitle, e);
			this.$emit("update:title", this.newTitle);
		},
	},
};
</script>
