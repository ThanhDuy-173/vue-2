<template>
	<div id="container">
		{{ name }}
		{{ propsName }}
	</div>
</template>
<script>
import Vue from "vue";
export default {
	name: "TabHome",
	data() {
		return {
			name: "Tab Home",
		};
	},
	props: {
		propsName: String,
	},
};
export const TabPost = new Vue({
	name: "TabPost",
	data() {
		return {
			name: "TabPost",
		};
	},
	props: {
		propsName: String,
	},
});
</script>
