<template>
	<div id="app">
		<router-link to="/">One</router-link><br />
		<router-link to="/two">Two</router-link>
		<br />
		<router-link to="/three">Three</router-link>
		<br />
		<router-link to="/user/1">User 1</router-link>
		<br />
		<router-link to="/user/2">User 2</router-link>
		<br />
		<router-link to="/dir">Dir Two</router-link>
		<br />
		<router-link to="/dirN">DirN Three</router-link>
		<br />
		<router-link to="/dirNN">Dir Dir</router-link>
		<br />
		<router-link to="/testDir">Test Dir to</router-link>
		<br />
		<router-link to="/user3">User 3 Alias</router-link>
		<br />
		<router-link to="/props/1">Props 1</router-link>
		<p>Use $store {{ $store.state.count }}</p>
		<p>Use mapState {{ count }}</p>
		<ol>
			<li v-for="todo in todos" :key="todo.id" v-bind:todo="todo">
				{{ todo.id }}
			</li>
		</ol>
		<DemoVue />
		<router-view />
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DemoVue from "./components/RenderJSX.vue";

export default {
	name: "App",
	components: {
		DemoVue,
	},
	computed: {
		...mapState(["count", "todos"]),
		...mapGetters(["doneTodos"]),
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
