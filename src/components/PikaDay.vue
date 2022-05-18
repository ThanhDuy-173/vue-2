<template>
	<div id="pika-day">
		<input ref="dateInput" v-model="date" type="date" />
		<InlineTemplate inline-template>
			<h1>Inline template parent</h1>
		</InlineTemplate>
		<OnceRender />
		<MultiRender />
		<h1>{{ count }}</h1>
		<button @click="UpdateCount">Increment</button>
	</div>
</template>
<script src="https://unpkg.com/pikaday@1.7.0"></script>
<script>
// import Pikaday from "../../node_modules/pikaday";
export default {
	name: "pika-day",
	data() {
		return {
			date: null,
			count: 0,
		};
	},
	mounted: function () {
		var picker = new Pikaday({
			field: this.$refs.dateInput,
			format: "YYYY-MM-DD",
		});
		this.$once("hook:beforeDestroy", function () {
			picker.destroy();
		});
	},
	components: {
		InlineTemplate: () => import("./InlineTemplate.vue"),
		OnceRender: () => import("./OnceRender.vue"),
		MultiRender: () => import("./MultiRender.vue"),
	},
	methods: {
		UpdateCount() {
			this.count++;
		},
	},
};
</script>
