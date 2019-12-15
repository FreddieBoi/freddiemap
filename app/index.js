document.addEventListener("DOMContentLoaded", function () {
    const mapName = 'freddiemap';
    const map = L.map(mapName);

    const home = L.latLng(58.4136998, 15.3379589);
    const homeMarker = L.marker(home);
    const homePopup = homeMarker.bindPopup('<h2>Hölja Ängbacken</h2><p>This is where I live with my wife. We love our mansion on the countryside!</p>');

    const work = L.latLng(58.3934735, 15.5637636);
    const workMarker = L.marker(work);
    workMarker.bindPopup('<h2>Drakryggen</h2><p>This is where I work. Visit us at <a href="https://drakryggen.com">drakryggen.com</a>.</p>');

    const roots = L.latLng(58.4750092, 14.3088882);
    const rootsMarker = L.marker(roots);
    rootsMarker.bindPopup('<h2>Fagersanna</h2><p>This is where I grew up and where my parents live.</p>');

    const wifeRoots = L.latLng(60.6893456, 13.6964878);
    const wifeRootsMarker = L.marker(wifeRoots);
    wifeRootsMarker.bindPopup('<h2>Malung</h2><p>My wife grew up in Dalarna and this is where my parents-in-law live.</p>');

    const militaryService = L.latLng(59.6488913, 17.1032611);
    const militaryServiceMarker = L.marker(militaryService);
    militaryServiceMarker.bindPopup('<h2>LedR in Enköping</h2><p>I did my military service here in 2006.</p>');

    const university = L.latLng(58.3978392, 15.5738185);
    const universityMarker = L.marker(university);
    universityMarker.bindPopup('<h2>LiU (LiTH) in Linköping</h2><p>I came here to study M.Sc. IT back in 2007.</p>');

    const vacationHome = L.latLng(58.5347775, 11.2592293);
    const vacationHomeMarker = L.marker(vacationHome);
    vacationHomeMarker.bindPopup('<h2>Hamburgö</h2><p>My parents vacation home is located on the bestcoast of Sweden. This is the best place to be in the summer.</p>');

    const markers = L.featureGroup([
        homeMarker,
        workMarker,
        rootsMarker,
        wifeRootsMarker,
        militaryServiceMarker,
        universityMarker,
        vacationHomeMarker,
    ]);
    markers.addTo(map);

    map.fitBounds(markers.getBounds().pad(0.5));
    homePopup.openPopup();

    const layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoiZnJlZGRpZWJvaSIsImEiOiJjazQ2ejFjMGYwNjd4M2xwYWU5aTg1NmQzIn0.V38GfqyN5X6Mjjd436qt1A'
    });
    layer.addTo(map);
});