<template>
	<div id="example-4">
		<button @click="show = !show">Kích hoạt</button>
		<transition appear name="fade"
			><p>Render Initial Transition</p>
		</transition>
		<transition>
			<button v-bind:key="isEditing" @click="HandleEditing">
				{{ isEditing ? "Lưu" : "Sửa" }}
			</button>
		</transition>
		<transition>
			<button v-bind:key="docState">
				{{ buttonMessage }}
			</button>
		</transition>
		<br />
		<transition name="fade" mode="out-in">
			<button v-bind:key="isEditing" @click="HandleEditing">
				{{ isEditing ? "Lưu" : "Sửa" }}
			</button>
		</transition>
		<br />
		<transition
			appear
			name="fade"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
		>
			<h6 v-if="show">Transition Hook</h6>
		</transition>
	</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
export default {
	name: "TransitionHook",

	data() {
		return {
			show: true,
			isEditing: true,
			docState: "saved",
		};
	},

	mounted() {},

	computed: {
		buttonMessage: function () {
			switch (this.docState) {
				case "saved":
					return "Sửa";
				case "edited":
					return "Lưu";
				case "editing":
					return "Hủy";
			}
		},
	},

	methods: {
		HandleEditing() {
			this.isEditing = !this.isEditing;
		},
		beforeEnter(el) {
			console.log("beforeEnter", el);
		},
		enter(el) {
			console.log("enter", el);
		},
		afterEnter(el) {
			console.log("afterEnter", el);
			el.style.color = "blue";
			setTimeout(() => (this.show = false), 2000);
		},
		beforeLeave(el) {
			el.style.color = "yellow";
			console.log("beforeLeave", el);
		},
		leave(el) {
			console.log("leave", el);
		},
		afterLeave(el) {
			console.log("afterLeave", el);
		},
	},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
