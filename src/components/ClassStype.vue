<template>
	<div id="container">
		<div v-bind:class="classObject">
			<h1>Class & Style</h1>
			<button @click="Change">ChangeType</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isActive: true,
			error: null,
		};
	},
	computed: {
		classObject: function () {
			return {
				active: this.isActive && !this.error,
				"text-danger": this.error && this.error.type === "fatal",
			};
		},
	},
	methods: {
		Change() {
			(this.isActive = false),
				(this.error = {
					type: "fatal",
				});
		},
	},
};
</script>
