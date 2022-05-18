<template>
	<div>
		<span>{{ value }}</span>
	</div>
</template>

<script>
export default {
	name: "animated-integer",

	data() {
		return {};
	},

	mounted() {},

	methods: {},

	props: {
		value: {
			type: Number,
			require: true,
		},
	},
};
</script>

<style lang="scss" scoped></style>
