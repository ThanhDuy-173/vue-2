<template>
	<div id="post">
		<h3>{{ post.title }}</h3>
		<button @click="$emit('enlarge-text', 0.1)">Phóng to</button>
		<div v-html="post.content"></div>
	</div>
</template>
<script>
export default {
	props: {
		post: Object,
	},
};
</script>
