let supermarket = "";
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.755312, lng: -73.911136},
        zoom: 14
    });

    var marker1 = new google.maps.Marker({
        position: {lat: 40.741524, lng: -73.919150},
        map: map,
        title: 'Good Neighbors Supermarket',
        address:"45-60 46th St, Sunnyside, NY 11104",
        desc:"Family Owned supermarket with fresh produce. Come check us out!"
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 40.767085, lng: -73.922033},
        map: map,
        title: "Trade Fair",
        address:"3008 30th Ave, Long Island City, NY 11102",
        desc:"Multiethnic market with exotic produce, imported international foods & a full-service butcher."
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 40.763590, lng: -73.912823},
        map: map,
        title: 'Family Market',
        address:"25-37 23th St, Woodside, NY 11377",
        desc:"An iconic supermarket located in Woodside and is completely family owned with produce coming directly from upstate ranches."
    });

    [marker1, marker2, marker3].forEach(function(marker){
        console.log(marker)
        google.maps.event.addListener(marker,"click", function(){
            document.getElementById("maps-body-info-name").innerHTML=marker.title;
            document.getElementById("maps-body-info-address").innerHTML=marker.address;
            document.getElementById("maps-body-info-desc").innerHTML=marker.desc;
            document.getElementById("maps-body-info-confirm").classList.remove("hidden")
        })
    })

    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);

    document.getElementById("maps-body-info-confirm").addEventListener("click", ()=>{
        supermarket=document.getElementById("maps-body-info-name").innerHTML;
    })

}