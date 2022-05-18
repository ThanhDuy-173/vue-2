<template>
	<div id="app">
		<h1 v-if="test">If</h1>
		<h1 v-else>Else</h1>
		<button @click="Change">Change</button>
		<h1 v-if="type === 'A'">A</h1>
		<h1 v-else-if="type === 'B'">B</h1>
		<h1 v-else-if="type === 'C'">C</h1>
		<h1 v-else>Not ABC</h1>
		<button @click="ChangeABC">Change</button>
		<h1 v-show="ok">Hello Show!</h1>
		<h1>{{ ok }}</h1>
	</div>
</template>
<script>
export default {
	data() {
		return {
			test: true,
			arr: ["A", "B", "C", "D"],
			type: "",
			ok: Math.random().toFixed(0),
		};
	},
	methods: {
		Change() {
			this.test = !this.test;
		},
		ChangeABC() {
			let index = Math.random() * 2;
			this.type = this.arr[index.toFixed(0)];
			console.log(this.type, this.arr[index], index.toFixed(0));
		},
	},
};
</script>
