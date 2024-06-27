// Add event listener to iframe
document.getElementById('map-frame').addEventListener('load', function() {
	// Get the map object
	var map = document.getElementById('map-frame').contentWindow.document.getElementById('map');
	
	// Add event listener to map
	map.addEventListener('click', function(event) {
		// Get the coordinates of the click event
		var coords = event.latLng;
		
		// Create a new marker
		var marker = new google.maps.Marker({
			position: coords,
			map: map,
			title: 'New Marker'
		});
		
		// Add a click event to the marker
		marker.addListener('click', function() {
			alert('You clicked on the marker!');
		});
	});
});