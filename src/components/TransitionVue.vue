<template>
	<div id="demo">
		<button v-on:click="show = !show">Active Transition</button>
		<h6>Transition</h6>
		<transition name="fade">
			<p v-if="show">Hello Duy</p>
		</transition>
		<transition name="slide-fade">
			<p v-if="show">ThankZ</p>
		</transition>
		<button v-on:click="showAnimation = !showAnimation">
			Active Animation
		</button>
		<h6>Animation</h6>
		<transition name="bounce">
			<p v-if="showAnimation">Cân đẩu vân</p>
		</transition>
		<button v-on:click="showAnimationCustom = !showAnimationCustom">
			Active Animation Custom
		</button>
		<h6>Animation Custom Class</h6>
		<transition
			name="custom-classes-transition"
			enter-active-class="animated tada"
			leave-active-class="animated bounceOutRight"
		>
			<p v-if="showAnimationCustom">Thú nhún</p>
		</transition>
		<button v-on:click="duration = !duration">Duration</button>
		<h6>Duration Transition</h6>
		<transition name="fade" :duration="1000">
			<p v-if="duration">Hello Duy</p>
		</transition>
		<transition name="fade" :duration="{ enter: 500, leave: 800 }">
			<p v-if="duration">Hello Duy</p>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			show: true,
			showAnimation: true,
			showAnimationCustom: true,
			duration: true,
		};
	},
};
</script>
<style>
/* Transition */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
	transform: translateX(10px);
	opacity: 0;
}
/* Animation */
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
