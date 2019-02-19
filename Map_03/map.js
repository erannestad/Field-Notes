	var map = L.map('map', {
		crs: L.CRS.Simple,
		center: [0, 0],
		zoom: 0
	});
	//
	// var southWest = map.unproject([0, 6145], map.getMaxZoom());
	// var northEast = map.unproject([6145, 0], map.getMaxZoom());
	// map.setMaxBounds(new L.LatLngBounds(southWest, northEast));



	// create new pane
		var pane = map.createPane('squigglies');
		var marker = L.marker({pane: 'squigglies'});

	// create new pane
		var pane = map.createPane('newTile');
		var marker = L.marker({pane: 'newTile'});

	// create new pane
		var pane = map.createPane('data');
		var marker = L.marker({pane: 'data'});

	// add raster layer to leaflet-overlay-pane div class //

	var bounds = [[-200, -600], [200,200]];
	var options = {className: 'moss'}
	var image = L.imageOverlay('retainingwallmoss.jpg', bounds, options).addTo(map);


	var bounds = [[100, 100], [400,700]];
	var options = {className: 'moss'}
	var image = L.imageOverlay('sat-imagery/slides.gif', bounds, options).addTo(map);

// 	var marker = new L.marker([39.5, -77.3], { opacity: 1 }); //opacity may be set to zero
// marker.bindTooltip("retainingwallmoss", {permanent: true, className: "my-label", offset: [0, 0] });
// marker.addTo(map);
	//
	// var bounds = [[-400, -400], [-200,-200]];
	// var options = {className: 'gif', pane: 'data'}
	// var image = L.imageOverlay('../Day2_Diablo-Lake-Trail/data/0159.gif', bounds, options).addTo(map);
	//
	// var bounds = [[100, 100], [300,300]];
	// var options = { className: 'gif', pane: 'data'}
	// var image = L.imageOverlay('../Day2_Diablo-Lake-Trail/data/0160.gif', bounds, options).addTo(map);

	// var bounds = [[-100, -100], [100,100]];
	// var options = {className: 'squigglies', pane: 'squigglies'}
	// var image = L.imageOverlay('../Day2_Diablo-Lake-Trail/squigglies/squigglies-03.svg', bounds, options).addTo(map);
	//
	// var bounds = [[-1000, -1000], [300,300]];
	// var options = {className: 'squigglies'}
	// var image = L.imageOverlay('../Day2_Diablo-Lake-Trail/squigglies/squigglies-8.svg', bounds, options).addTo(map);

	// var bounds = [[-300, -300], [300,300]];
	// var options = {className: 'lines', pane: 'squigglies'}
	// var image = L.imageOverlay('../Day3_not-sure/lines.png', bounds, options).addTo(map);


	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 100, tileSize: 256}
	L.TileLayer.Blueprint = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 200 );
			return "../map_02/blueprint-tiles/00"+i+".png";
		}, options
	});

	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 100, tileSize: 256, className:'line-tiles'}
	L.TileLayer.Lines = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 20 );
			return "../Day3_not-sure/line-tiles2/00"+i+".png";
		}, options
	});

	// add tile layers to leaflet-tile-pane div class //
	var options = {zIndex: 100, tileSize: 512, pane: 'newTile', className:'retainingwalltiles'}
	L.TileLayer.Lines = L.TileLayer.extend({
		getTileUrl: function(coords) {
			var i = Math.ceil( Math.random() * 200 );
			return "retainingwallslices/images/00"+i+".png";
		}, options
	});


	L.tileLayer.blueprint = function() {
		return new L.TileLayer.Blueprint();
	}

	L.tileLayer.lines = function() {
		return new L.TileLayer.Lines();
	}

	L.tileLayer.retainingwalltiles = function() {
		return new L.TileLayer.Retainingwalltiles();
	}


    // map.addLayer( L.tileLayer.blue() );
    map.addLayer( L.tileLayer.blueprint() );



		// map.addLayer( L.tileLayer.blue() );
		map.addLayer( L.tileLayer.lines() );



		// map.addLayer( L.tileLayer.blue() );
		map.addLayer( L.tileLayer.retainingwalltiles() );
