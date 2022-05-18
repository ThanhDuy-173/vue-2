<template>
	<div id="slot-parent">
		<SlotChildren> Your Slot Formal </SlotChildren>
		<SlotChildren>
			<template #header>
				<h6>Slot header</h6>
			</template>
		</SlotChildren>
		<SlotChildren>
			<template v-slot:footer>
				<h6>Slot footer</h6>
			</template>
		</SlotChildren>
		<SlotChildren>
			<template v-slot="slotProps">
				<h6>SlotProps</h6>
				{{ slotProps.person }}
			</template>
		</SlotChildren>
		<SlotChildren>
			<template v-slot="person">
				<h6>person</h6>
				{{ person }}
			</template>
		</SlotChildren>
		<SlotChildren v-slot="{ person: user }">
			{{ user }}
		</SlotChildren>
		<SlotChildren v-slot="{ person = { lastName: 'haThankZ' } }">
			<h6>????</h6>
			{{ person.lastName }}
		</SlotChildren>
	</div>
</template>
<script>
import SlotChildren from "./SlotChildren.vue";
export default {
	name: "slot-parent",
	data() {
		return {};
	},
	components: {
		SlotChildren,
	},
	methods: {},
};
</script>
