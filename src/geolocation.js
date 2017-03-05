class Geolocation {
    constructor() {
        this.geolocation = navigator.geolocation;
    }

    getGeoLocation() {
        return new Promise((resolve, reject) => {
            if (!this.isAvailable()) {
                reject(new Error('Geolocation not available'));
                return;
            }

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
        });
    }

    isAvailable() {
        return typeof this.geolocation  !== 'undefined';
    }
}
