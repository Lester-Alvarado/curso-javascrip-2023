let markers, map;

function initMap() {
  const posicion = {
    lat: 15.921796587364367,
    lng: -90.6763458414885,
  }

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: posicion,
  })

  markers =
    new google.maps.Marker({
      position: {
        lat: 15.921796587364367,
        lng: -90.6763458414885,
      },
      map,
      title: "Laguna de Lachua",
    });
  markers =
    new google.maps.Marker({
      position: {
        lat: 17.22204389569675,
        lng: -89.62371402294937,
      },
      map,
      title: "Parque Nacional Tikal",
    })

  markers =
    new google.maps.Marker({
      position: {
        lat: 15.534021665771666,
        lng: -89.95923398944885,
      },
      map,
      title: "Semuc Champey",
    })

    
}