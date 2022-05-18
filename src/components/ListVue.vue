<template>
	<div class="container">
		<div v-for="(value, name) in object" :key="value">
			{{ name }} : {{ value }}
		</div>
		<button @click="changeArr">{{ arr }}</button>
		<li v-for="(item, index) of evenNumber" :key="index">{{ item }}</li>
		<div id="todo-list-example">
			<input
				v-model="newTodoText"
				v-on:keyup.enter="addNewTodo"
				placeholder="Thêm việc cần làm"
			/>
			<ul>
				<li
					is="todoItem"
					v-for="(todo, index) in todos"
					v-bind:key="todo.id"
					v-bind:title="todo.title"
					v-on:remove="todos.splice(index, 1)"
				></li>
			</ul>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
import todoItem from "./todoItem.vue";
export default {
	data() {
		return {
			object: {
				name: "ThankZ",
				age: 22,
			},
			arr: [1, 2, 3],
			items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			newTodoText: "",
			todos: [
				{
					id: 1,
					title: "luộc khoai",
				},
				{
					id: 2,
					title: "cùng chị giã gạo",
				},
				{
					id: 3,
					title: "thổi cơm",
				},
				{
					id: 4,
					title: "nhổ cỏ vườn",
				},
			],
			nextTodoId: 5,
		};
	},
	methods: {
		changeArr() {
			Vue.set(this.arr, 1, ++this.arr[1]);
			this.object = Object.assign(this.object, {
				sex: "male",
			});
		},
		addNewTodo: function () {
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText,
			});
			this.newTodoText = "";
		},
	},
	computed: {
		evenNumber() {
			return this.items.filter(item => item % 2 === 0);
		},
	},
	components: {
		todoItem,
	},
};
</script>
