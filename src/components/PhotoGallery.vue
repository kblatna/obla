<template>        
  <div class="d-flex">
    <div class="col-12 col-md-6" v-lightgallery>
      <swiper
        :modules="[Thumbs]"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide v-for="(photo, index) in photos" :key="index">
          <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
            <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-12 col-md-6 p-3">
      dfasdeflasfe
    </div>
  </div>

  <div class="my-2">
    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="10"
      :loop="true"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      class="test"
    >
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
          <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
        </a>
      </swiper-slide>
    </swiper>  
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const modules = [Navigation, Pagination, Scrollbar, Thumbs]

// Define the photos array
const photos = ref([
  { src: '0018', alt: 'Obývací pokoj' },
  { src: '0019', alt: 'Kuchyně' },
  { src: '0020', alt: 'Ložnice' },
  { src: '0032', alt: 'Koupelna' },
  { src: '0033', alt: 'Chodba' },
  { src: '0036', alt: 'blabla' },
  { src: '0042', alt: 'Obývací pokoj' },
  { src: '0047', alt: 'Kuchyně' },
  { src: '0054', alt: 'Ložnice' },
  { src: '0059', alt: 'Koupelna' },
  { src: '0067', alt: 'Chodba' },
  { src: '0079', alt: 'blabla' }
])

</script>

<style lang="scss">

.swiper {
  width: 100%;
  height: 100%;
  --swiper-navigation-color: #fff;
  --swiper-theme-color: #fff;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;  
  margin-left: auto;
  margin-right: auto;
}



.swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


 <!-- <template>        
  <div class="d-flex">
    <div class="col-12 col-md-6">
      <div v-lightgallery>
        <swiper
          :modules="[Thumbs]"
          @swiper="setThumbsSwiper"
          :slides-per-view="1"
        >
          <swiper-slide v-for="(photo, index) in photos" :key="index">
            <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
              <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="col-12 col-md-6 p-3">
      dfasdeflasfe
    </div>
  </div>

  <div class="my-2">
    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="10"
      :loop="true"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <a :href="`/images/DSC_${photo.src}.jpg`" data-lg-size="1600-2400">
          <img :alt="photo.alt" :src="`/images/DSC_${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
        </a>
      </swiper-slide>
    </swiper>  
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
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

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const modules = [Navigation, Pagination, Scrollbar, Thumbs]

// Define the photos array
const photos = ref([
  { src: '0018', alt: 'Obývací pokoj' },
  { src: '0019', alt: 'Kuchyně' },
  { src: '0020', alt: 'Ložnice' },
  { src: '0032', alt: 'Koupelna' },
  { src: '0033', alt: 'Chodba' },
  { src: '0036', alt: 'blabla' },
  { src: '0042', alt: 'Obývací pokoj' },
  { src: '0047', alt: 'Kuchyně' },
  { src: '0054', alt: 'Ložnice' },
  { src: '0059', alt: 'Koupelna' },
  { src: '0067', alt: 'Chodba' },
  { src: '0079', alt: 'blabla' }
])
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;  
  margin-left: auto;
  margin-right: auto;
}

.swiper-wrapper {
  height: 150px;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
 -->
