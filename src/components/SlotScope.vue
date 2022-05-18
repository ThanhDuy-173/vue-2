<template>
	<div id="slot-scope">
		<SlotScopeChildren>
			<template v-slot="person">
				{{ person.person.lastName }}
			</template>
		</SlotScopeChildren>
	</div>
</template>
<script>
import SlotScopeChildren from "./SlotScopeChildren.vue";
export default {
	name: "slot-scope",
	data() {
		return {};
	},
	components: {
		SlotScopeChildren,
	},
};
</script>
