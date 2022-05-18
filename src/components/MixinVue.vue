<template>
	<div>
		<h6 v-rainbow>Mixin</h6>
		<h6 v-rainbow>{{ count }}</h6>
		<button @click="test">Add</button>
		<button @click="subtract">Subtract</button>
		<div v-demo:foo.a.b="msg"></div>
		<h1 v-color="'red'">Red</h1>
	</div>
</template>

<script>
import vue from "vue";
vue.directive("color", function (el, binding) {
	el.style.backgroundColor = binding.value;
});
const mixin = {
	data() {
		return {
			msg: "Hello",
			foo: "abc",
			count: 1,
		};
	},
	created() {
		console.log("Hook mixin");
	},
	methods: {
		test() {
			console.log("Method Mixin");
			this.count += 2;
		},
		subtract() {
			console.log("Method Mixin");
			this.count -= 1;
		},
	},
	directives: {
		rainbow: {
			bind(el) {
				el.style.color = "#" + Math.random().toString().slice(2, 8);
				console.log("rainbow", Math.random().toString().slice(2, 8));
			},
		},
		demo: {
			bind(el, binding, vnode) {
				var s = JSON.stringify;
				el.innerHTML =
					"name: " +
					s(binding.name) +
					"<br>" +
					"value: " +
					s(binding.value) +
					"<br>" +
					"expression: " +
					s(binding.expression) +
					"<br>" +
					"argument: " +
					s(binding.arg) +
					"<br>" +
					"modifiers: " +
					s(binding.modifiers) +
					"<br>" +
					"vnode keys: " +
					Object.keys(vnode).join(", ");
			},
		},
	},
};
export default {
	name: "ReCo",
	mixins: [mixin],
	data() {
		return {
			msg: "ThankZ",
			bar: "ha",
			count: 0,
		};
	},
	created() {
		console.log("Hook Component", this.$data);
	},
	mounted() {},

	methods: {
		test() {
			console.log("Method Component");
			this.count += 1;
		},
	},
};
</script>
<style lang="scss" scoped></style>
