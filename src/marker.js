const mapbox = require("mapbox-gl");


const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (type === "activity") {
        markerDomEl.style.backgroundImage = iconURLs.activities;
    } else if (type === "hotel") {
        markerDomEl.style.backgroundImage = iconURLs.hotels;
    } else {
        markerDomEl.style.backgroundImage = iconURLs.restaurants;

    }

    // new mapboxgl.Marker(markerDomEl).setLngLat(arrCoor).addTo(map); // [-87.6354, 41.8885] for Chicago

}

module.exports = buildMarker;