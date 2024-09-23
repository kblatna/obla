<template>        
  <div class="d-flex flex-wrap">
    <div class="photogallery col-12 col-lg-6" v-lightgallery>
      <swiper
        :modules="[Thumbs]"
        @swiper="setThumbsSwiper"
        class="main-photo"
      >
        <swiper-slide v-for="(photo, index) in photos" :key="index">
          <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
            <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2 w-100" />
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="information col-12 col-lg-6">
      <InfoTable />
    </div>
  </div>

  <div class="my-2" v-lightgallery>
    <swiper
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="10"
      :loop="true"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      class="thumbs"
    >
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
          <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2" />
        </a>
      </swiper-slide>
    </swiper>  
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules'
import vLightgallery from './vLightgallery'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/thumbs'

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'

const thumbsSwiper = ref(null)
const windowWidth = ref(window.innerWidth)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const modules = [Navigation, Pagination, Scrollbar, Thumbs]

// Define the photos array
const photos = ref([
  { src: '0018', alt: 'Obývací pokoj' },
  { src: '0036', alt: 'Obývací pokoj' },
  { src: '0047', alt: 'Obývací pokoj' },
  { src: '0083', alt: 'Kuchyňská linka' },
  { src: '0116', alt: 'Kuchyňský kout' },
  { src: '0079', alt: 'Kuchyňská linka' },
  { src: '0100', alt: 'Chodba' },
  { src: '0103', alt: 'Vstupní dveře' },
  { src: '0139', alt: 'Ložnice' },
  { src: '0144', alt: 'Ložnice' },
  { src: '0153', alt: 'Ložnice' },
  { src: '0067', alt: 'Koupelna' },
  { src: '0059', alt: 'Koupelna' },
  { src: '0054', alt: 'Toaleta' },
  { src: '0160', alt: 'Vchod do domu' },
  { src: '0162', alt: 'Pohled na dům z parkoviště' },
  { src: '0163', alt: 'Radnice kousek od domu' },
  { src: '0168', alt: 'Park Pod Plachtami' },
  { src: '0169', alt: 'Komunitní centrum Skála' }
])

const slidesPerView = computed(() => {
  switch (true) {
    case (windowWidth.value <= 576):
      return 2
    case (windowWidth.value <= 992):
      return 3
    case (windowWidth.value <= 1200):
      return 4
    default:
      return 5
  }
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>