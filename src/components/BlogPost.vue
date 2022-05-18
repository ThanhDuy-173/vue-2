<template>
	<div id="blog-posts-events-demo">
		<div :style="{ fontSize: postFontSize + 'em' }">
			<PostVue
				v-for="post in posts"
				v-bind:key="post.id"
				v-bind:post="post"
				v-on:enlarge-text="postFontSize += $event"
			></PostVue>
		</div>
	</div>
</template>
<script>
import PostVue from "./PostVue.vue";
export default {
	data() {
		return {
			posts: [
				{ title: "A", Content: "A" },
				{ title: "B", Content: "B" },
				{ title: "C", Content: "C" },
			],
			postFontSize: 1,
		};
	},
	components: {
		PostVue,
	},
};
</script>
