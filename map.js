var map = L.map('mapid').setView([-7.118736, 112.416550], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â© <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicnlhbjkzc3AiLCJhIjoiY2pkMDJxZ2xpMGxjYTJxbzRtd3EzZnRzcCJ9.WsRQpljGbYjxw7za2_cPtA'
}).addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX("https://gevalinda.github.io/desa_lamongan/desa_lamongan.json", {
    style: {
        fillColor: "#ff7800",
        fillOpacity: 0.7,
        color: "white",
        weight: 1,
        opacity: 0.7
    }
});
geojsonLayer.addTo(map);

// var jsonLayer = new L.GeoJSON.AJAX("kecamatanjatim.json", {
//     style: {
//         fillColor: "#ff7800",
//         fillOpacity: 0.7,
//         color: "white",
//         weight: 1,
//         opacity: 0.7
//     }
// });
// jsonLayer.addTo(map);

document.getElementById("dataid1").addEventListener("change", function() {
    if (document.getElementById(this.id).checked == true) {
        geojsonLayer.addTo(map);
    } else {
        geojsonLayer.remove(map);
    }
});

document.getElementById("dataid2").addEventListener("change", function() {
    if (document.getElementById(this.id).checked == true) {
        jsonLayer.addTo(map);
    } else {
        jsonLayer.remove(map);
    }
});