<template>
	<div id="slot-children">
		<div>
			<h1>Slot Formal</h1>
			<slot></slot>
		</div>
		<div>
			<h1>Slot Name</h1>
			<slot name="header"></slot>
			<slot name="footer"></slot>
		</div>
		<div>
			<h1>Scoped Slot</h1>
			<slot v-bind:person="person">{{ person.firstName }}</slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "slot-children",
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
