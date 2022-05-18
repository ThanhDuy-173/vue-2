<template>
	<div id="container">
		<button @click="greet">Greeting</button>
		<button @click="submit('ThankZ with love', $event)">Submit</button>
		<a v-on:click.stop="doThis" href="https://google.com">stop</a>
		<form v-on:submit.prevent="onSubmit">
			<input />
			<button>Submit</button>
		</form>
		<a v-on:click.stop.prevent="doThat" href="https://google.com"
			>stop prevent</a
		>
		<div v-on:click.capture="doThis">capture</div>
		<div v-on:click.self="doThat">self</div>
		<a v-on:click.once="donateKidney" href="https://google.com" target="_blank"
			>once</a
		>
		<div v-on:scroll.passive="onScroll">scroll</div>
		<input v-on:keyup.13="submit" placeholder="13" />
		<input @keyup.enter="submit" placeholder="enter" />
		<input @keyup.page-down="submit" placeholder="down" />
		<input @keyup.middle="submit" placeholder="middle" />
		<button @click.ctrl.exact="submit">A</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			name: "ThankZ",
		};
	},
	methods: {
		greet(event) {
			alert("Hello " + this.name + " !");
			if (event) {
				alert(event.target.tagName);
			}
		},
		submit(message, event) {
			if (event) {
				console.log(event.preventDefault());
				event.preventDefault();
			}
			alert(message);
		},
		onSubmit() {
			alert("Submit");
		},
		doThis() {
			alert("Do this");
		},
		doThat() {
			alert("Do that");
		},
	},
};
</script>
