<template>
	<div>
		<input v-model.number="firstNumber" type="number" step="20" /> +
		<input v-model.number="secondNumber" type="number" step="20" /> =
		{{ result }}
		<p>
			<AniInt v-bind:value="firstNumber"></AniInt> +
			<AniInt v-bind:value="secondNumber"></AniInt> =
			<AniInt v-bind:value="result"></AniInt>
		</p>
	</div>
</template>

<script>
import TWEEN from "@tweenjs/tween.js";
export default {
	name: "AniIntParent",
	mixins: [],
	data() {
		return {
			tweeningValue: 0,
			firstNumber: 0,
			secondNumber: 0,
		};
	},

	mounted() {
		this.tween(0, this.value);
	},

	methods: {
		tween: function (startValue, endValue) {
			var vm = this;
			function animate() {
				if (TWEEN.update()) {
					requestAnimationFrame(animate);
				}
			}

			new TWEEN.Tween({ tweeningValue: startValue })
				.to({ tweeningValue: endValue }, 500)
				.onUpdate(function (object) {
					vm.tweeningValue = object.tweeningValue.toFixed(0);
				})
				.start();

			animate();
		},
	},

	watch: {
		value: function (newValue, oldValue) {
			this.tween(oldValue, newValue);
		},
	},

	computed: {
		result: function () {
			return this.firstNumber + this.secondNumber;
		},
	},

	components: {
		AniInt: () => import("./AniInt.vue"),
	},
};
</script>

<style lang="scss" scoped></style>
