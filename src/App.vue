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
        <h1 class="text-center my-5">2+kk, 48 m², Oblá, Brno - Nový Lískovec</h1>
        <PhotoGallery />
    </div>

    <footer class="footer text-center text-lg-start text-white mt-5">
        <section class="container pt-4">
            <div class="text-center text-sm-start mb-3">
                <div class="d-flex justify-content-center">
                    <div>
                        <h6 class="footer-col-title text-uppercase fw-bold">Kontakt na majitele:</h6>                    
                        <div class="mt-5">
                            Tomáš Cibulka
                            Oblá 36<br>
                            625 00 BRNO
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
import PhotoGallery from './components/PhotoGallery.vue'
</script>

