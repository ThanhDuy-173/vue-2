<template>
	<div id="slot-scope-children">
		<div>
			<h1>Scoped Slot</h1>
			<slot v-bind:person="person">{{ person.firstName }}</slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "slot-scope-children",
	data() {
		return {
			person: {
				firstName: "ThankZ",
				lastName: "Ha",
			},
		};
	},
	props: {},
	methods: {},
};
</script>
