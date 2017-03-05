let coordinates = new Geolocation();
coordinates.getGeoLocation().then((coordinates) => {
        console.log(`the coordinates are ${coordinates}`);
        var mymap = L.map('mapid').setView(
            [coordinates.latitude, coordinates.longitude], 13);
    }).catch((error) => {
        console.log(error);
    });
