var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_HYBRID_1 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bataskelurahan_3 = new ol.format.GeoJSON();
var features_Bataskelurahan_3 = format_Bataskelurahan_3.readFeatures(json_Bataskelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataskelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataskelurahan_3.addFeatures(features_Bataskelurahan_3);
var lyr_Bataskelurahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bataskelurahan_3, 
                style: style_Bataskelurahan_3,
                interactive: true,
                title: '<img src="styles/legend/Bataskelurahan_3.png" /> Batas kelurahan'
            });
var format_LOKASIPEMEGANGSIP_4 = new ol.format.GeoJSON();
var features_LOKASIPEMEGANGSIP_4 = format_LOKASIPEMEGANGSIP_4.readFeatures(json_LOKASIPEMEGANGSIP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOKASIPEMEGANGSIP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOKASIPEMEGANGSIP_4.addFeatures(features_LOKASIPEMEGANGSIP_4);
var lyr_LOKASIPEMEGANGSIP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOKASIPEMEGANGSIP_4, 
                style: style_LOKASIPEMEGANGSIP_4,
                interactive: true,
                title: '<img src="styles/legend/LOKASIPEMEGANGSIP_4.png" /> LOKASI PEMEGANG SIP'
            });

lyr_google_0.setVisible(true);lyr_HYBRID_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Bataskelurahan_3.setVisible(true);lyr_LOKASIPEMEGANGSIP_4.setVisible(true);
var layersList = [lyr_google_0,lyr_HYBRID_1,lyr_OpenStreetMap_2,lyr_Bataskelurahan_3,lyr_LOKASIPEMEGANGSIP_4];
lyr_Bataskelurahan_3.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDEPUM': 'KDEPUM', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_LOKASIPEMEGANGSIP_4.set('fieldAliases', {'No_URUT': 'No Urut', 'Jen_SIP': 'Fungsi', 'No_SIP': 'No SIP', 'Terbit_SIP': 'Tanggal Terbit SIP', 'Akh_SIP': 'Tanggal Akhir SIP', 'Alamat': 'Alamat', 'Pemegang': 'Pemegang SIP', 'PEMILIK_SA': 'Pemilik Saat ini', 'x': 'Koordinat X', 'y': 'Koordinat Y', 'Pekerjaan': 'Pekerjaan', 'Lama_Tingg': 'Lama Tinggal', 'Kegiatan': 'Fungsi Saat ini', 'Data_SIP': 'Data_SIP', 'Sewa': 'Pembayaran Sewa', 'LT': 'Luas Tanah', 'LB': 'Luas Bangunan', 'LANTAI': 'Jumlah Lantai', 'FOTO': 'FOTO', 'Status_Lap': 'Status tanah', });
lyr_Bataskelurahan_3.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_LOKASIPEMEGANGSIP_4.set('fieldImages', {'No_URUT': 'TextEdit', 'Jen_SIP': 'TextEdit', 'No_SIP': 'TextEdit', 'Terbit_SIP': 'TextEdit', 'Akh_SIP': 'TextEdit', 'Alamat': 'TextEdit', 'Pemegang': 'TextEdit', 'PEMILIK_SA': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Lama_Tingg': 'TextEdit', 'Kegiatan': 'TextEdit', 'Data_SIP': 'TextEdit', 'Sewa': 'TextEdit', 'LT': 'TextEdit', 'LB': 'TextEdit', 'LANTAI': 'TextEdit', 'FOTO': 'ExternalResource', 'Status_Lap': 'TextEdit', });
lyr_Bataskelurahan_3.set('fieldLabels', {'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'KDEPUM': 'inline label', 'KDCPUM': 'inline label', 'KDPKAB': 'inline label', 'LUASWH': 'inline label', 'SRS_ID': 'inline label', });
lyr_LOKASIPEMEGANGSIP_4.set('fieldLabels', {'No_URUT': 'inline label', 'Jen_SIP': 'inline label', 'No_SIP': 'inline label', 'Terbit_SIP': 'inline label', 'Akh_SIP': 'inline label', 'Alamat': 'inline label', 'Pemegang': 'inline label', 'PEMILIK_SA': 'inline label', 'x': 'inline label', 'y': 'inline label', 'Pekerjaan': 'inline label', 'Lama_Tingg': 'inline label', 'Kegiatan': 'inline label', 'Data_SIP': 'inline label', 'Sewa': 'inline label', 'LT': 'inline label', 'LB': 'inline label', 'LANTAI': 'inline label', 'FOTO': 'inline label', 'Status_Lap': 'inline label', });
lyr_LOKASIPEMEGANGSIP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});