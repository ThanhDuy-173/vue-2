<template>
	<div>
		<h1>Render JSX</h1>
	</div>
</template>

<script>
export default {
	name: "RenderJSX",

	data() {
		return {
			items: [{ name: "ThankZ" }, { name: "Duy" }, { name: "Z" }],
		};
	},

	mounted() {},

	methods: {},

	render: function () {
		return <span>Hello</span>;
	},
};
</script>

<style lang="scss" scoped></style>
