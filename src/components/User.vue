<template>
	<div>
		<h1>User {{ $route.params.id }}</h1>
		<h2>Profile {{ profile }}</h2>
		<h1>Router {{ $route.href }}</h1>
		<router-link to="/profile">Go to profile localhost/profile</router-link>
		<hr />
		<router-link to="profile">Go to profile localhost/user/profile</router-link>
		<hr />
		<router-link :to="url">Go to profile {{ url }}</router-link>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "HelloWorkUser",

	data() {
		return {
			profile: this.$route.params.id,
			url: "/user/" + this.$route.params.id + "/profile",
		};
	},

	mounted() {},

	methods: {},
	watch: {
		$route(to, from) {
			console.log("$route", "to", to, "from", from, "path", to.path, from.path);
			this.profile = to.params.id;
			this.url = "/user/" + to.params.id + "/profile";
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log("beforeRouteEnter");
		console.table({ to: to, from: from, next: next });
		next();
	},
	beforeRouteUpdate(to, from, next) {
		console.log("beforeRouteUpdate");
		console.table({ to: to, from: from, next: next });
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log("beforeRouteLeave");
		console.table({ to: to, from: from, next: next });
		const answer = window.confirm(
			"Do you really want to leave? you have unsaved changes!"
		);
		if (answer) {
			next();
		} else {
			next(false);
		}
	},
};
</script>

<style lang="scss" scoped></style>
