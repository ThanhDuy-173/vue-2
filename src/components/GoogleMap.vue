<template>
	<div id="map">
		<google-map>
			<google-map-marker v-bind:places="vueConfCities"></google-map-marker>
		</google-map>
	</div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM"></script>
<script>
export default {
	data() {
		return {
			vueConfCities: [
				{
					name: "Wrocław",
					position: {
						lat: 51.107885,
						lng: 17.038538,
					},
				},
				{
					name: "New Orleans",
					position: {
						lat: 29.951066,
						lng: -90.071532,
					},
				},
			],
		};
	},
	components: {
		MapVue: () => import("./MapVue.vue"),
		MapMarker: () => import("./MapMarker.vue"),
	},
};
</script>
