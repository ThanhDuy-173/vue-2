<template>
	<div id="vue">
		<input v-model.trim="msg" />
		<br />
		<input v-model.number="age" type="number" />
		<h1>Age: {{ age }} {{ typeof age }}</h1>
		<br /><br />
		<input v-model.lazy="msg" />
		<h1>text: {{ msg }}</h1>
		<br /><br />
		<span>Multiline message is:</span>
		<p style="white-space: pre-line">{{ message }}</p>
		<br />
		<textarea v-model="message" placeholder="add multiple lines"></textarea>
		<br />
		<input type="checkbox" id="checkbox" v-model="checked" />
		<label for="checkbox">{{ checked }}</label>
		<br /><br />
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames" />
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
		<label for="mike">Mike</label>
		<br />
		<span>Checked names: {{ checkedNames }}</span>
		<br /><br />
		<input type="radio" id="one" value="One" v-model="picked" />
		<label for="one">One</label>
		<br />
		<input type="radio" id="two" value="Two" v-model="picked" />
		<label for="two">Two</label>
		<br />
		<span>Picked: {{ picked }}</span>
		<br /><br />
		<select v-model="selected">
			<option disabled value="">Please select one</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<span>Selected: {{ selected }}</span>
		<br /><br />
		<select v-model="selectedMultiple" multiple>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<br />
		<span>Selected: {{ selectedMultiple }}</span>
		<br /><br />
		<select v-model="selectedFor">
			<option
				v-for="option in options"
				v-bind:value="option.value"
				:key="option.value"
			>
				{{ option.text }}
			</option>
		</select>
		<span>Selected: {{ selectedFor }}</span>
		<br /><br />
		<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
		<p>{{ toggle }}</p>
		<br /><br />
	</div>
</template>
<script>
export default {
	data() {
		return {
			message: "",
			checked: false,
			checkedNames: [],
			picked: "",
			selected: "",
			selectedMultiple: [],
			selectedFor: "",
			options: [
				{ text: "One", value: "A" },
				{ text: "Two", value: "B" },
				{ text: "Three", value: "C" },
			],
			toggle: "",
			msg: "",
			age: "",
		};
	},
};
</script>
