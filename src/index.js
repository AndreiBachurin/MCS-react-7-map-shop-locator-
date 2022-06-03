import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import "./styles.css";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5kcmVpYmFjaHVyaW4iLCJhIjoiY2wzcjkwNGVjMGh3ZzNjcDdmOTV3YnlhaSJ9.LzhaJXZjkTn10--iuTAr2A";
  const [marker, setMarker] = useState([]);

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });
    setMarker(new mapboxgl.Marker().setLngLat([37.6173, 55.7558]).addTo(map));
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  function handleShopSelect(event) {
    marker.setLngLat(stores[event.target.value]);
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleShopSelect}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
