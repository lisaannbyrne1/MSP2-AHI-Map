//Show map

function initialize() {
    var options = {
        center: {
            lat: 53.2734,
            lng: -7.77832031
        },
        zoom: 6.5
    };

    map = new google.maps.Map(document.getElementById('map'), options);

    var countyselect = document.getElementById('county');
    countyselect.addEventListener('change', onCountySelect);
    renderMarkers();

}

//Create markers & infowindows
let markers = [];

function renderMarkers() {
    for (var i = 0; i < practices.length; i++) {
        markers[i] = new google.maps.Marker({
            position: practices[i].position,
            title: practices[i].name,
            map: map,
            animation: google.maps.Animation.DROP,
        });

        google.maps.event.addListener(markers[i], 'click', function() {
            console.log(this)
            let infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(this.getTitle());
            infoWindow.open(map, this);
        });
    }

}

//Zoom to county on select
function onCountySelect() {
    var countySelect = document.getElementById("county");
    var countiesByCode = counties.map(function(c) {
        return c.code;
    });
    var index = countiesByCode.indexOf(countySelect.value)

    if (index > -1) {
        var selectedCounty = counties[index];
        map.setCenter(selectedCounty.center);
        map.setZoom(selectedCounty.zoom);

        renderResultsList(selectedCounty);
    } else {
        map.setCenter({ lat: 53.2734, lng: -7.77832031 });
        map.setZoom(6.5);

        clearResultsList();
    }
}


//Show results

function renderResultsList(selectedCounty) {
    var relevantPractices = practices.filter(function(p) {
        return p.code === selectedCounty.code;
    });
    var resultsArea = document.getElementById("results");
    resultsArea.innerHTML = "";

    for (var i = 0; i < relevantPractices.length; i++) {
        var practice = relevantPractices[i];
        var div = document.createElement("div");
        div.className = "result";
        div.innerHTML = `<h5>${practice.name}</h5><p>${practice.address}</p><p>${practice.vet}</p>`;
        resultsArea.appendChild(div);
    }
}


//Reset results

function clearResultsList() {
    document.getElementById("results").innerHTML = "";
}