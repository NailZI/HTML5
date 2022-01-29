var ourCoords = {
  latitude: 47.624851,
  longitude: -122.52099,
};

window.onload = getMyLocation();

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
  } else {
    alert("Oops, no geolocation support");
  }
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let div = document.getElementById("location");
  div.innerHTML = "Ваша Широта: " + latitude + ", Долгота: " + longitude;

  let km = computeDistance(position.coords, ourCoords);
  let distance = document.getElementById("distance");
  distance.innerHTML = "Вы в " + km + " км от WickedlySmart HQ";

  showMap(position.coords);
}

function displayError(error) {
  let errorTypes = {
    0: "Неизвестная ошибка",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out",
  };
  let errorMessage = errorTypes[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  let div = document.getElementById("location");
  div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);

  var Radius = 6371; // radius of the Earth in km
  var distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;

  return distance;
}

function degreesToRadians(degrees) {
  radians = (degrees * Math.PI) / 180;
  return radians;
}

// let googleLatAndLong = new google.maps.LatLng(latitude, longitude);
// let mapOptions = {
//   zoom: 10,
//   center: googleLatAndLong,
//   mapTypeId: google.maps.MapTypeID.ROADMAP,
// };
// let map;

function showMap(coords) {
  var googleLatAndLong = new google.maps.LatLng(coords.latitude,
                          coords.longitude);
  var mapOptions = {
    zoom: 21,
    center: googleLatAndLong,
    mapTypeId: google.maps.MapTypeId.Satellite};
  var mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
}

	// // add the user marker
	// var title = "Your Location";
	// var content = "You are here: " + coords.latitude + ", " + coords.longitude;
	// addMarker(map, googleLatAndLong, title, content);
