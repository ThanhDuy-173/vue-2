<template>
	<div>
		<h6>Transition Component</h6>
		<button @click="ChangeForm">{{ view }}</button>
		<transition name="component-fade" mode="out-in">
			<component v-bind:is="view"></component>
		</transition>
		<h6>Transition Group</h6>
		<button v-on:click="add">Thêm</button>
		<button v-on:click="remove">Bớt</button>
		<transition-group name="list" tag="p">
			<span v-for="item in items" v-bind:key="item" class="list-item">
				{{ item }}
			</span>
		</transition-group>
		<button v-on:click="shuffle">Xáo trộn</button>
		<transition-group name="flip-list" tag="ul">
			<li v-for="item in items" v-bind:key="item">
				{{ item }}
			</li>
		</transition-group>
		<button v-on:click="shuffle">Xáo trộn</button>
		<button v-on:click="add">Thêm</button>
		<button v-on:click="remove">Bớt</button>
		<transition-group name="list-complete" tag="p">
			<span v-for="item in items" v-bind:key="item" class="list-complete-item">
				{{ item }}
			</span>
		</transition-group>
	</div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>
export default {
	name: "TransitionCom",

	data() {
		return {
			view: "FormOne",
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			nextNum: 10,
		};
	},

	mounted() {},

	methods: {
		ChangeForm() {
			if (this.view === "FormOne") this.view = "FormTwo";
			else this.view = "FormOne";
		},
		randomIndex: function () {
			return Math.floor(Math.random() * this.items.length);
		},
		add: function () {
			this.items.splice(this.randomIndex(), 0, this.nextNum++);
		},
		remove: function () {
			this.items.splice(this.randomIndex(), 1);
		},
		shuffle: function () {
			const _ = require("lodash");
			this.items = _.shuffle(this.items);
		},
	},

	components: {
		FormOne: () => import("./FormOne.vue"),
		FormTwo: () => import("./FormTwo.vue"),
	},
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active ở các phiên bản trước 2.1.8 */ {
	opacity: 0;
}
.list-enter-active,
.list-leave-active {
	transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
.flip-list-move {
	transition: transform 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active đối với các phiên bản trước 2.1.8 */ {
	opacity: 0;
	transform: translateY(30px);
}
.list-complete-leave-active {
	position: absolute;
}
</style>
