<template>
	<div id="container">
		<li>
			{{ title }}
			<button @click="$emit('remove')">Remove</button>
		</li>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
	},
};
</script>
