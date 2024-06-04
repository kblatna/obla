<template>
    <lightgallery
        :settings="{ speed: 500, download: false, plugins: plugins }"  
        class="gallery d-flex flex-wrap"   
    >
        <a 
            v-for="index in photosAmount" :key="index"
            :href="`/images/${index}.jpg`" 
            class="gallery-item cursor-pointer"
        >
            <!-- TODO: dodělat alt pomocí pole s objekty -->
            <img alt="img1" :src="`/images/${index}.jpg`" class="w-100" /> 
        </a>       
    </lightgallery>
</template>

<script setup lang="ts">
import lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/scss/lightgallery.scss'

const plugins = [lgThumbnail, lgZoom]

const photosAmount = 4

</script>