<template>
    <div class="row justify-content-between">
        <div class="col-12 col-lg-7">
            <p>Nabízím k prodeji byt s dispozicí 2+kk a užitnou plochou 48 m², který se nachází na ulici Oblá v Brně v městské části Nový Lískovec. 
                Byt prošel před <b>5 lety rekonstrukcí</b>, během které se kromě nové koupelny, toalety a kuchyňské linky nezapomnělo ani 
                na elektrické rozvody či plovoucí podlahy v celém bytě. Nové jsou také interiérové a zejména pak bezpečnostní vstupní 
                dveře. Bytový dům prošel <b>celkovou revitalizací</b> a je ve velmi dobrém stavu. Díky zateplení a plastovým oknům jsou zde 
                nízké náklady na vytápění.
            </p>

            <h3>Vybavení:</h3>
            <p>
                V rámci kuchyně je k dispozici elektrická trouba se sklokeramickou varnou deskou a digestoří. Součástí kuchyňské linky 
                je rovněž myčka nádobí. Budoucímu majiteli můžeme přenechat také lednici s mrazákem a mikrovlnou troubu. Prostor mezi 
                kuchyňským koutem a obývacím pokojem hezky oddělovala nábytková stěna 
                <a class="link-secondary fw-bold" href="https://www.ikea.com/cz/cs/p/kallax-policovy-dil-vz-bile-mor-dub-10324513/" target="_blank">Kallax</a>. 
                Na chodbě se nachází prostorná šatní skříň <a class="link-secondary fw-bold" href="https://www.ikea.com/cz/cs/cat/system-pax-19086/" 
                target="_blank">IKEA PAX</a>, v ložnici pak 140 cm široká postel. Obojí může zůstat v bytě. 
            </p>

            <h3>Občanská vybavenost:</h3>
            <p>
                K supermarketu <b>Albert</b> je to pěšky asi jen pět minut. Pokud na něco zapomenete, ve vedlejším vchodu se nachází obchůdek 
                „Céčko". Pro větší nákupy pak může posloužit <b>nákupní centrum Campus Square</b>.
            </p>
            <p>
                Lékárna, knihovna či drogerie včetně 
                Zásilkovny jsou spolu s úřadem městské části vzdáleny asi 200 metrů od domu. Milovníky kávy potěší <b>kavárna Coffee Trail 
                Garden</b> v nově otevřeném komunitním centru přímo u zastávky Oblá. Pro sportovce je tu pak centrum <b>Fit4all</b>, kde si můžete 
                zahrát mimo jiné tenis či badminton.
            </p>

            <div class="d-flex justify-content-center my-4">
                <BButton
                    variant="primary" 
                    href="tel:+420725695145"
                    class="btn-lg"
                >
                    <IconifyIcon icon="mdi:phone" class="me-2" />
                    725 695 145
                </BButton>
            </div>
        </div>

        <div class="col-12 col-lg-4">            
            <div class="p-4 rounded-3 bg-light">
                <h3>Náklady na bydlení:</h3>

                <IconWithText v-for="cost in costs" :key="cost.id"
                    :icon="cost.icon" 
                    :text="cost.text"
                />
                <div class="mt-3"><b>Celkem 3 500 Kč</b> při obsazení bytu 2 osobami. </div>
            </div>

            <div class="flat-surroundings p-4 rounded-3 bg-light mt-4">
                <h3>Vyžití v&nbsp;okolí:</h3>
                            
                <IconWithText v-for="activity in activities" :key="activity.id"
                    :icon="activity.icon" 
                    :link="activity.link" 
                    :text="activity.text"
                />
            </div>                       
        </div>
    </div>
</template>

<script setup lang="ts">
import IconWithText from './IconWithText.vue'

const costs = [
    { id: 1, icon: 'mdi:radiator', text: 'Vytápění: 500 Kč' },
    { id: 2, icon: 'mdi:shower', text: 'Voda (ohřev, vodné, stočné): 500 Kč' },
    { id: 3, icon: 'mdi:lightbulb-on-outline', text: 'Elektřina: 950 Kč' },
    { id: 4, icon: 'mdi:house-city-outline', text: 'Poplatek za správu budovy včetně fondu oprav: 1000 Kč' },
    { id: 5, icon: 'mdi:hand-coin-outline', text: 'Ostatní náklady (např. úklid, pojištění domu apod.): 500 Kč' }
]

const activities = [
    { id: 1, icon: 'mdi:forest-outline', link: 'https://www.kudyznudy.cz/aktivity/koniklecova-louka-v-prirodni-rezervaci-kamenny-vrc', text: 'Unikátní koniklecová louka' },
    { id: 2, icon: 'mdi:flower', link: 'https://www.novy-liskovec.cz/park-pod-plachtami/ds-1140', text: 'Park Pod Plachtami' },
    { id: 3, icon: 'mdi:fitness-center', link: 'https://www.fit4all.cz/cs', text: 'Fitness centrum Fit4All' },
    { id: 4, icon: 'mdi:house-city-outline', link: 'https://novy-liskovec.cz/komunitni-centrum-skala/ds-1389', text: 'Komunitní a společenské centrum Skála' },
    { id: 5, icon: 'mdi:swimming-pool', link: 'https://aquapark.starez.cz/', text: 'Aquapark Kohoutovice' },
    { id: 6, icon: 'material-symbols:museum-outline', link: 'https://www.mzm.cz/pavilon-anthropos/', text: 'Pavilon Anthropos' }
] 

</script>