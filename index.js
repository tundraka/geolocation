const geo = new Geolocation();

geo.getGeoLocation().then((coordinates) => {
    var mymap = L.map('mapid').setView(
        [coordinates.latitude, coordinates.longitude], 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    //L.marker([coordinates.latitude, coordinates.longitude]).addTo(mymap)
    //.bindPopup('You\'re here!')
    //.openPopup();

    var circle = L.circle([coordinates.latitude, coordinates.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 300}).addTo(mymap);
}).catch((error) => {
    console.log(error);
});
