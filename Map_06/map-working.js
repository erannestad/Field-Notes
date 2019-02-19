


//set fixed text
var div = document.createElement('div');
div.innerHTML = "Ross Dam Construction <br> 1931";
div.setAttribute('class', 'note leaflet-map-pane', 'style', 'transform: translate3d(-12.3491px, -70.9766px, 0px);');
document.getElementById('map').appendChild(div);



	var map = L.map('map', {
		crs: L.CRS.Simple,
		center: [0, 0],
		zoom: 5
	})






	var options = {interval: 20,
	               showOriginLabel: false,
	               redraw: 'move',
	               zoomIntervals: [
	                {start: 0, end: 3, interval: 40},
	                {start: 4, end: 5, interval: 10},
	                {start: 6, end: 20, interval: 2}
	            ]};

	// // add tile layers to leaflet-tile-pane div class //
	// var options = {zIndex: 100, tileSize: 256}
	// L.TileLayer.Blueprint = L.TileLayer.extend({
	// 	getTileUrl: function(coords) {
	// 		var i = Math.ceil( Math.random() * 200 );
	// 		return "../Day2_Diablo-Lake-Trail/blueprint-tiles/00"+i+".png";
	// 	}, options
	// });
	//
	// L.tileLayer.blueprint = function() {
	// 	return new L.TileLayer.Blueprint();
	// }
	//
  // // map.addLayer( L.tileLayer.blue() );
  // map.addLayer( L.tileLayer.blueprint() );


	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 200, tileSize: 50, className:'shapes'}
	L.TileLayer.Shapes = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 400 );
			return "shapes2/images/00"+i+".gif";
		}, options
	});

	L.tileLayer.shapes = function() {
		return new L.TileLayer.Shapes();
	}

	// map.addLayer( L.tileLayer.blue() );
	map.addLayer( L.tileLayer.shapes() );


	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 100, tileSize: 256}
	L.TileLayer.Construction = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 150 );
			return "construction-tiles-2/00"+i+".png";
		}, options
	});

	L.tileLayer.construction = function() {
		return new L.TileLayer.Construction();
	}

	// map.addLayer( L.tileLayer.blue() );
	map.addLayer( L.tileLayer.construction() );


	var options = {interval: 20,
	               showOriginLabel: true,
	               redraw: 'move',
	               zoomIntervals: [
	                {start: 0, end: 3, interval: 40},
	                {start: 4, end: 5, interval: 10},
	                {start: 6, end: 20, interval: 2}
	            ]};

	L.simpleGraticule(options).addTo(map);
