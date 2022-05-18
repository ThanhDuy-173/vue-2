<template>
	<div class="demo">
		Thời gian hiện ra:
		<input
			type="range"
			v-model="fadeInDuration"
			min="0"
			v-bind:max="maxFadeDuration"
		/>
		Thời gian mờ đi:
		<input
			type="range"
			v-model="fadeOutDuration"
			min="0"
			v-bind:max="maxFadeDuration"
		/>
		<transition
			v-bind:css="false"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:leave="leave"
		>
			<p v-if="show">Xin chào</p>
		</transition>
		<button
			v-if="stop"
			v-on:click="
				stop = false;
				show = false;
			"
		>
			Bắt đầu
		</button>
		<button v-else v-on:click="stop = true">Dừng lại</button>
		<br />
		<h6>State Animation</h6>
		<input v-model.number="number" type="number" step="20" />
		<p>{{ animatedNumber }}</p>
	</div>
</template>
<script>
import Velocity from "velocity-animate";
import { TweenLite } from "gsap/all";
export default {
	name: "TransitionDynamic",

	data() {
		return {
			show: true,
			fadeInDuration: 1000,
			fadeOutDuration: 1000,
			maxFadeDuration: 1500,
			stop: true,
			number: 0,
			tweenedNumber: 0,
		};
	},

	mounted() {
		this.show = false;
	},
	create() {
		this.tweenedColor = Object.assign({}, this.color);
	},
	computed: {
		animatedNumber: function () {
			return this.tweenedNumber.toFixed(0);
		},
	},
	watch: {
		number: function (newValue) {
			TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
		},
	},

	methods: {
		beforeEnter: function (el) {
			el.style.opacity = 0;
		},
		enter: function (el, done) {
			Velocity(
				el,
				{ opacity: 1 },
				{
					duration: this.fadeInDuration,
					complete: function () {
						done();
						if (!this.stop) this.show = false;
					},
				}
			);
		},
		leave: function (el, done) {
			Velocity(
				el,
				{ opacity: 0 },
				{
					duration: this.fadeOutDuration,
					complete: function () {
						done();
						this.show = true;
					},
				}
			);
		},
	},
};
</script>

<style lang="scss" scoped></style>
