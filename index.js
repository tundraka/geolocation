class Coordinates {
    constructor(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    }

    toString() {
        return `lat: ${this.latitude}, long: ${this.longitude}`;
    }
}

class Geolocation {
    constructor() {
        this.geolocation = navigator.geolocation;
    }

    getGeoLocation() {
        return new Promise((resolve, reject) => {
            if (!this.isAvailable()) {
                reject(new Error('Geolocation not available'));
            }

            try {
                this.geolocation.getCurrentPosition(
                    (position) => {
                        if (!position) {
                            reject(new Error('No coordinates available'));
                        }

                        resolve(new Coordinates(position));
                    },
                    () => {
                        reject(new Error('Unable to get coordinates.'));
                    }
                );
            } catch(e) {
                console.log(e);
            }
        });
    }

    isAvailable() {
        return typeof this.geolocation  !== 'undefined';
    }
}

let coordinates = new Geolocation();
coordinates.getGeoLocation().then((coordinates) => {
        console.log(`the coordinates are ${coordinates}`);
    }).catch((error) => {
        console.log(error);
    });
