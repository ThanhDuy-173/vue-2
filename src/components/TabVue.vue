<template>
	<div id="dynamic-component-demo" class="demo">
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			v-bind:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab"
		>
			{{ tab }}
		</button>
		<component v-bind:is="currentTabComponent" class="tab"></component>
		<TabHome :propsName="currentTabComponent" />
		<tab-home propsName="New register" />
		<p>{{ title }}</p>
		<TitleSync :title.sync="title" />
	</div>
</template>
<style>
.tab-button {
	padding: 6px 10px;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border: 1px solid #ccc;
	cursor: pointer;
	background: #f0f0f0;
	margin-bottom: -1px;
	margin-right: -1px;
}
.tab-button:hover {
	background: #e0e0e0;
}
.tab-button.active {
	background: #e0e0e0;
}
.tab {
	border: 1px solid #ccc;
	padding: 10px;
}
</style>
<script>
import TabHome from "./TabHome.vue";
import TitleSync from "./TitleSync.vue";
export default {
	data() {
		return {
			currentTab: "Home",
			tabs: ["Home", "Post", "Archive"],
			tabSelected: "Tab Nice",
			title: "Old Title",
		};
	},
	components: {
		"tab-home": TabHome,
		TabHome,
		TitleSync,
	},
	methods: {
		currentTabHandle() {
			this.tabSelected = "Tab" + this.currentTab;
		},
	},
	computed: {
		currentTabComponent: function () {
			return "Tab" + this.currentTab;
		},
	},
};
</script>
