<template>
    <header class="header">
        <BNavbar toggleable="lg" container>
            <BNavbarBrand href="tel:+420725695145">
                <IconifyIcon icon="mdi:phone" class="me-2" />725 695 145
            </BNavbarBrand>
            <BNavbarToggle target="nav-collapse" class="bg-white" />
            <BCollapse id="nav-collapse" is-nav>
                <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                    <BNavItem href="#photogallery" class="text-white-50">Fotogalerie</BNavItem>
                    <BNavItem href="#information" class="text-white-50">Informace</BNavItem>
                    <BNavItem href="#location" class="text-white-50">Lokalita</BNavItem>
                </BNavbarNav>
            </BCollapse>
        </BNavbar>
    </header>
    
    <div class="container">
        <h1 class="text-center mt-5 mb-0">Prodej pěkného 2+kk bytu po&nbsp;rekonstrukci</h1>
        <p class="text-center text-gray-400 fs-3 mb-0">48 m², Oblá, Brno - Nový Lískovec</p>
        <section class="section" id="photogallery">            
            <PhotoGallery />
        </section>

        <section id="information">
            <FlatInfo />
        </section>

        <section class="section" id="location">
            <h3 class="text-center mb-4">Lokalita</h3>
            <!-- <CityMap /> -->                
            <iframe class="rounded-2" style="border:none" src="https://frame.mapy.cz/s/pobedefefa" width="100%" height="466" frameborder="0"></iframe>
        </section>
    </div>

    <footer class="footer text-center text-md-start text-white mt-5">           
        <FooterInfo />        
    </footer>
</template>

<script setup lang="ts">
import FlatInfo from './components/FlatInfo.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import FooterInfo from './components/FooterInfo.vue'
</script>