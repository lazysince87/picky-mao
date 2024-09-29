import React, { useState, useEffect, useMemo} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '550px'
};

function App({ initialQuery }) {
  const [map, setMap] = React.useState(null)
  const [directions, setDirections] = useState(null)
  const [points, setPoints] = useState([  {
    // marston science library
    lat: 29.648618126772757, 
    lng: -82.34370328886838
    },
    {
      lat: 0,
      lng: 0
    }, ]);
  const [inputString, setInputString] = useState(initialQuery);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAI1aGvbPiIxDXZzzNaTEpb_3m0LXKljmw",
    libraries: ['places']
  })

  const center = {
    lat: 29.648618126772757,
    lng: -82.34370328886838
  };
  
  const calculateDirections = async() => {
    if(isLoaded && points.length > 1 && points[1] != {}) {
      const directionsService = new window.google.maps.DirectionsService()
      console.log(points);

      const waypoints = points.map((point) => {
        return {lat: point.lat, lng: point.lng};
      });

      console.log(waypoints[0]);


      const request = {
        origin: waypoints[0],
        destination: waypoints[1],
        waypoints: waypoints.slice(2),
        travelMode: window.google.maps.TravelMode.DRIVING
      }

      const res = await directionsService.route(request)

      if(res.status === "OK") {
        setDirections(res)
      }
    }
  }

  const fetchPlaces = () => {
    if (isLoaded && map) {
      const request = {
        query: `${inputString} gainesville florida`,
        fields: ['geometry', 'name']
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.findPlaceFromQuery(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const location = results[0];
          const newPoint = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng()
          };
          
          setDirections(null);

          // Update points to include the new location
          setPoints([points[0], {lat: 29.628342687746983, lng: -82.38500657517038}]);
          console.log(newPoint)
        } else {
          console.error("Places service status:", status);
        }
      });
    }
  };


  useEffect(() => {
    fetchPlaces();
  }, [isLoaded, map, inputString]);

  useEffect(()=>{
    calculateDirections()
  },[points])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map)=>setMap(map)}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}
      >
        {
          directions && (
            <DirectionsRenderer directions={directions} />
          )
        }
        {/* {points.map((point) => (
          <MarkerF position={point}></MarkerF>
        ))} */}

        {/* <MarkerF position={center}></MarkerF> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(App)