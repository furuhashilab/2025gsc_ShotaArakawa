var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '古代蓮の里',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 古代蓮の里'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1];
lyr__1.set('fieldAliases', {'Name': 'Name', 'Lat': 'Lat', 'Lon': 'Lon', 'Photo': 'Photo', 'URL': 'URL', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Photo': 'TextEdit', 'URL': 'TextEdit', });
lyr__1.set('fieldLabels', {'Name': 'no label', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Photo': 'no label', 'URL': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});