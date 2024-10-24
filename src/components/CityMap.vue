<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { Map, MapStyle, Marker, config } from '@maptiler/sdk'
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue'
import '@maptiler/sdk/dist/maptiler-sdk.css'

const mapContainer = shallowRef(null)
const map = shallowRef(null)

onMounted(() => {
  config.apiKey = 'mI8dwlG5cULmK3dCzvVP'

  const initialState = { lng: 16.5550678, lat: 49.1767086, zoom: 15 }

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }))

  new Marker({color: "#FF0000"})
  .setLngLat([16.5550678, 49.1767086])
  .addTo(map.value)

}),
onUnmounted(() => {
  map.value?.remove()
})
</script>