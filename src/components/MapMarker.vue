<template>
	<div></div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM"></script>
<script>
export default {
	name: "google-map-marker",
	props: {
		places: String,
	},
	created: function () {
		var vm = this;
		vm.$parent.getMap(function (map) {
			vm.places.forEach(function (place) {
				new google.maps.Marker({
					position: place.position,
					map: map,
				});
			});
		});
	},
};
</script>
