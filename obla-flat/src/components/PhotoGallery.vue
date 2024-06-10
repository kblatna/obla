<template>        
    <div class="d-flex">
        <div class="col-12 col-md-6">
            <swiper
                :modules="[Thumbs]"
                @swiper="setThumbsSwiper"
            >
                <swiper-slide v-for="(photo, index) in photos" :key="index">
                    <img :alt="photo.alt" :src="`/images/${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
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
        >
            <swiper-slide v-for="(photo, index) in photos" :key="index">
                <img :alt="photo.alt" :src="`/images/${photo.src}.jpg`" class="rounded-2 w-100 h-100" />
            </swiper-slide>
        </swiper>  
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/thumbs'

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const modules = [Navigation, Pagination, Scrollbar, Thumbs]

// Define the photos array
const photos = ref([
    { src: 'obyvak', alt: 'Obývací pokoj' },
    { src: 'kuchyne', alt: 'Kuchyně' },
    { src: 'loznice', alt: 'Ložnice' },
    { src: 'koupelna', alt: 'Koupelna' },
    { src: 'chodba', alt: 'Chodba' }
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