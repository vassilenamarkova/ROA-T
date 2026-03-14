// map.jsx
import { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Only load script if it hasn't been loaded already
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCLyxPGgeO72DmbXinDGS41KQ18dm3xb2w&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      // Attach callback function
      window.initMap = function () {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 40.7128, lng: -74.0060 },
          zoom: 17,
          mapId: "5c68c6e5ff7d7b0d4954a7f5",
          heading: 45,
          tilt: 45
        });

        new window.google.maps.Marker({
          position: { lat: 40.7128, lng: -74.0060 },
          map,
          title: "Our Coffee Shop"
        });
      };
    } else {
      // If Google Maps is already available (hot reload, etc.)
      window.initMap();
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        height: '300px',
        width: '500px',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
        marginTop: '7rem',
        marginLeft: '-40rem'
      }}
    ></div>
  );
}

export default Map;
