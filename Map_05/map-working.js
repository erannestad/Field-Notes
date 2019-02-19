


//set fixed text
var div = document.createElement('div');
div.textContent = "Diablo, Washington";
div.setAttribute('class', 'note leaflet-map-pane', 'style', 'transform: translate3d(-12.3491px, -70.9766px, 0px);');
document.getElementById('map').appendChild(div);





	var map = L.map('map', {
		crs: L.CRS.Simple,
		center: [0, 0],
		zoom: 0
	})


	var bounds = [[0, 0], [140,140]];
	var options = { className: 'gif'}
	var image = L.imageOverlay('gifs/gif1.gif', bounds, options).addTo(map);

	var bounds = [[-100, -80], [100,80]];
	var options = { className: 'gif'}
	var image = L.imageOverlay('gifs/gif2.gif', bounds, options).addTo(map);

	var bounds = [[-200, -200], [0,0]];
	var options = { className: 'gif'}
	var image = L.imageOverlay('gifs/gif3.gif', bounds, options).addTo(map);

	var bounds = [[-300, -400], [-80,-80]];
	var options = { className: 'gif'}
	var image = L.imageOverlay('gifs/gif5.gif', bounds, options).addTo(map);

	var bounds = [[500, -300 ], [200,200]];
	var options = {className: '#'}
	var image = L.imageOverlay('img-for-vid.jpg', bounds, options).addTo(map);


	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 100, tileSize: 256}
	L.TileLayer.Blueprint = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 200 );
			return "../Map_02/blueprint-tiles/00"+i+".png";
		}, options
	});

	// // add tile layers to leaflet-tile-pane div class //
	// var options = {zIndex: 100, tileSize: 512, pane: 'newTile', className:'dam'}
	// L.TileLayer.Lines = L.TileLayer.extend({
	// 	getTileUrl: function(coords) {
	// 		var i = Math.ceil( Math.random() * 400);
	// 		return "dam-tiles/00"+i+".png";
	// 	}, options
	// });


	L.tileLayer.blueprint = function() {
		return new L.TileLayer.Blueprint();
	}

	// L.tileLayer.dam = function() {
	// 	return new L.TileLayer.dam();
	// }


  // map.addLayer( L.tileLayer.blue() );
  map.addLayer( L.tileLayer.blueprint() );

  // // map.addLayer( L.tileLayer.blue() );
  // map.addLayer( L.tileLayer.dam() );

	var options = {interval: 20,
	               showOriginLabel: true,
	               redraw: 'move',
	               zoomIntervals: [
	                {start: 0, end: 3, interval: 50},
	                {start: 4, end: 5, interval: 5},
	                {start: 6, end: 20, interval: 1}
	            ]};

	L.simpleGraticule(options).addTo(map);
