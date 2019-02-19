	var map = L.map('map', {
		crs: L.CRS.Simple,
		center: [0, 0],
		zoom: 0
	});


	// create new pane
		var pane = map.createPane('myPane');
		var marker = L.marker({pane: 'myPane'});

	// add raster layer to leaflet-overlay-pane div class //
	// var bounds = [[-400, -400], [400,400]];
	// var options = {zIndex: 100, className: 'squigglies'}
	// var image = L.imageOverlay('squigglies/squigglies-01.svg', bounds, options).addTo(map);



	// add raster layer to leaflet-overlay-pane div class //
	var bounds = [[-400, -400], [400,400]];
	var options = {className: 'overlay-map'}
	var image = L.imageOverlay('Map_2-03.png', bounds, options).addTo(map);


	// add tile layers to leaflet-tile-pane div class //
	L.TileLayer.Blueprint = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 1000 );
			return "blueprint-tiles/00"+i+".png";
		},
	});

    L.TileLayer.Blue = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 1000 );
			return "Blue-Tiles_modified/0"+i+".gif";
		},
	});

	L.tileLayer.blueprint = function() {
		return new L.TileLayer.Blueprint();
	}
  L.tileLayer.blue = function() {
		return new L.TileLayer.Blue();
	}

    map.addLayer( L.tileLayer.blue() );
    map.addLayer( L.tileLayer.blueprint() );


		$(map.getContainer()).addClass('layer-1');
    $(leaflet-tile-pane.getContainer()).addClass('layer-blue');
  	var x = document.getElementsByClassName("leaflet-tile-pane").addClass('layer-blue');




//    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
//    $(osmLayer.getContainer()).addClass('osmLayer');
//    #map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-tile-pane >    div:nth-child(2) > div > img:nth-child(1)
//    var canvas = document.getElementsByClassName('leaflet-tile-loaded');
//    var ctx = leaflet-tile-loaded.getContext('2d');
//
   // ctx.globalCompositeOperation = 'multiply';


    setInterval(function() {
    // method to be executed;
        location.reload(forceGet)
    }, 1000);
