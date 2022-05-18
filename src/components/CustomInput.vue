<template>
	<div id="container">
		<input
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
		/>
	</div>
</template>
<script>
export default {
	props: {
		value: String,
	},
};
</script>
