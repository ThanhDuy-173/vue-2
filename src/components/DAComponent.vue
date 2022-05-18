<template>
	<div id="d-a-component">
		<keep-alive>
			<component :is="formName" />
		</keep-alive>
		<button @click="ChangeForm">Change Form</button>
		<h6>Form</h6>
		<button @click="FocusInput">Focus</button>
		<OnceRender />
		<MultiRender />
	</div>
</template>
<script>
export default {
	data() {
		return {
			formName: "FormOne",
		};
	},
	components: {
		FormOne: () => import("./FormOne.vue"),
		FormTwo: () => import("./FormTwo.vue"),
		OnceRender: () => import("./OnceRender.vue"),
		MultiRender: () => import("./MultiRender.vue"),
	},
	methods: {
		ChangeForm() {
			if (this.formName === "FormOne") this.formName = "FormTwo";
			else {
				this.formName = "FormOne";
			}
		},
		FocusInput() {
			console.log(this);
		},
	},
};
</script>
