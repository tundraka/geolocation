const geo = new Geolocation();
const map = L.map('mapid');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

geo.getGeoLocation().then((coordinates) => {
    const location = [coordinates.latitude, coordinates.longitude];

    map.setView(location, 15);

    //L.marker([coordinates.latitude, coordinates.longitude]).addTo(mymap)
    //.bindPopup('You\'re here!')
    //.openPopup();

    let circle = L.circle(location, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 300
    }).addTo(map);
}).catch((error) => {
    console.log(error);
});
