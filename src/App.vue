<template>
    <header>
        <BNavbar toggleable="lg" type="dark" variant="dark" container>
            <BNavbarBrand href="/">Oblá 36</BNavbarBrand>
            <BNavbarToggle target="nav-collapse" class="bg-white" />
            <BCollapse id="nav-collapse" is-nav>
                <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                    <BNavItem href="/" class="text-white-50">Info</BNavItem>
                </BNavbarNav>
            </BCollapse>
        </BNavbar>
    </header>
    
    <div class="container">
        <h1 class="text-center mt-5">2+kk, 48 m², Oblá, Brno - Nový Lískovec</h1>
        <section class="section">            
            <PhotoGallery />
        </section>

        <section>
            <FlatInfo />
        </section>

        <section class="section">
            <h3 class="text-center mb-4">Lokalita</h3>
            <!-- <CityMap /> -->                
            <iframe class="rounded-2" style="border:none" src="https://frame.mapy.cz/s/pobedefefa" width="100%" height="466" frameborder="0"></iframe>
        </section>
    </div>

    <footer class="footer text-center text-lg-start text-white mt-5">
        <section class="container pt-4">
            <div class="text-center text-sm-start mb-3">
                <div class="d-flex justify-content-center">
                    <div>
                        <h6 class="footer-col-title text-uppercase fw-bold">Kontakt na majitele:</h6>                    
                        <div class="mt-5">
                            Tomáš Cibulka<br>
                            Oblá 36<br>
                            634 00 BRNO
                        </div>
                        <div>                            
                            E-mail: <a href="mailto:t.cibulka87@gmail.com">t.cibulka87@gmail.com</a><br>
                            Telefon: <a href="tel:+420725695145">725 695 145</a>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>

        <div class="footer-bottom text-center p-3">
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
