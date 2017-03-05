class Coordinates {
    constructor(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    }

    toString() {
        return `lat: ${this.latitude}, long: ${this.longitude}`;
    }
}
