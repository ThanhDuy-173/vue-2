<template>
	<div id="app">
		<button @click="increment()">Count is: {{ firstName }} count</button>
		<span v-bind:title="message">
			Hover your mouse over me for a few seconds to see my dynamically bound
			title!
		</span>
		<span v-if="seen">Now you see me</span>
		<ol>
			<li v-for="todo in todos" :key="todo.text" v-bind:todo="todo">
				{{ todo.text }}
			</li>
		</ol>
		<p>{{ inputMess }}</p>
		<input v-model="inputMess" />
		<button :disabled="disabled">Button</button>
		<a :[attributeName]="src"> Test link </a>
	</div>
</template>
<script>
export default {
	name: "TestName",
	data() {
		return {
			firstName: "Duy",
			message: "You loaded this page on " + new Date().toLocaleString(),
			seen: true,
			todos: [
				{ text: "Learn JavaScript" },
				{ text: "Learn Vue" },
				{ text: "Build something awesome" },
			],
			inputMess: "VueJS",
			disabled: true,
			src: "https://www.facebook.com/",
			attributeName: "href",
		};
	},
	methods: {
		increment() {
			this.firstName += "Hi";
			this.seen = !this.seen;
			this.todos.push({ text: "ThankZ" });
		},
	},
};
</script>
