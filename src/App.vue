<template>
    <header class="header">
        <BNavbar toggleable="lg" container>
            <BNavbarBrand href="tel:+420725695145">
                <IconifyIcon icon="mdi:phone" class="me-2" />
                725 695 145
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
        <div class="container">    
            <div class="row justify-content-center justify-content-md-start">
                <div class="col-12 col-md-4 my-4">
                    <h6 class="text-uppercase fw-bold">Kontakt na majitele:</h6>                    
                    <div class="mt-2">
                        Tomáš Cibulka<br>
                        Oblá 36<br>
                        634 00 BRNO
                    </div>
                    <div>                            
                        E-mail: <a href="mailto:t.cibulka87@gmail.com">t.cibulka87@gmail.com</a><br>
                        Telefon: <a href="tel:+420725695145">725 695 145</a>
                    </div>
                </div>        
                <div class="col-12 col-md-4 my-4">
                    <h6 class="text-uppercase fw-bold">Dokumenty:</h6>
                    <div class="mt-2">                            
                        <a href="/pdf/prukaz_energeticke_narocnosti.pdf" target="_blank">Energetický štítek domu</a><br>
                        <a href="/pdf/list_vlastnika_obla.pdf" target="_blank">Evidenční list vlastníka</a><br>
                        <a href="/pdf/vyuctovani_druzba.pdf" target="_blank">Vyúčtování za rok 2023</a><br>
                        <a href="/pdf/rozuctovani_nakladu.pdf" target="_blank">Rozpis nákladů na vytápění a vodu</a>
                    </div>
                </div>               
            </div>     
        </div>        

        <div class="footer-bottom text-center bg-gray-850 p-3">
            <span class="opacity-50">© 2024 Kateřina Blatná</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type FlatInfo from './components/FlatInfo.vue';
import PhotoGallery from './components/PhotoGallery.vue'
</script>


<style>
.section {
    padding: 3rem 0;
}
</style>
