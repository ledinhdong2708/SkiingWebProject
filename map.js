
function initMap(latitude, longitude) {

    const uluru = { lat: latitude, lng: longitude };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

    const flightPlanCoordinates = [
        { lat: latitude, lng: longitude },
    ]
    setInterval(lele, 5000)
    function lele() {
        navigator.geolocation.getCurrentPosition((position5m) => {
            flightPlanCoordinates.push({ lat: position5m.coords.latitude, lng: position5m.coords.longitude })
            console.log(123)
            const flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
            });
            flightPath.setMap(map);
        })
    }





}

// function getLocationEvery5m() {
//     navigator.geolocation.getCurrentPosition(function getLocation5m(position5m) {
//     })

// }






function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            initMap(position.coords.latitude, position.coords.longitude)
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
getLocation()



