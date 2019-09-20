var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_mockelectionlocationsgeojsonmockelectionlocations_1 = new ol.format.GeoJSON();
var features_mockelectionlocationsgeojsonmockelectionlocations_1 = format_mockelectionlocationsgeojsonmockelectionlocations_1.readFeatures(json_mockelectionlocationsgeojsonmockelectionlocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mockelectionlocationsgeojsonmockelectionlocations_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_mockelectionlocationsgeojsonmockelectionlocations_1.addFeatures(features_mockelectionlocationsgeojsonmockelectionlocations_1);cluster_mockelectionlocationsgeojsonmockelectionlocations_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_mockelectionlocationsgeojsonmockelectionlocations_1
});var lyr_mockelectionlocationsgeojsonmockelectionlocations_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_mockelectionlocationsgeojsonmockelectionlocations_1, 
                style: style_mockelectionlocationsgeojsonmockelectionlocations_1,
                title: '<img src="styles/legend/mockelectionlocationsgeojsonmockelectionlocations_1.png" /> mock-election-locations.geojson mock-election-locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mockelectionlocationsgeojsonmockelectionlocations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mockelectionlocationsgeojsonmockelectionlocations_1];
lyr_mockelectionlocationsgeojsonmockelectionlocations_1.set('fieldAliases', {'Location': 'Location', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mockelectionlocationsgeojsonmockelectionlocations_1.set('fieldImages', {'Location': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_mockelectionlocationsgeojsonmockelectionlocations_1.set('fieldLabels', {'Location': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_mockelectionlocationsgeojsonmockelectionlocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});