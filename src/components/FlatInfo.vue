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
                kuchyňským koutem a obývacím pokojem odděluje nábytková stěna 
                <a class="link-secondary fw-bold" href="https://www.ikea.com/cz/cs/p/kallax-policovy-dil-vz-bile-mor-dub-10324513/" target="_blank">Kallax</a>, která 
                také může zůstat v bytě. Na chodbě se nachází prostorná šatní skříň <a class="link-secondary fw-bold" href="https://www.ikea.com/cz/cs/cat/system-pax-19086/" 
                target="_blank">IKEA PAX</a>, v ložnici pak 140 cm široká postel. 
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

            <div class="d-flex justify-content-center mt-4">
                <BButton
                    variant="primary" 
                    href="tel:+420725695145" 
                    target="_blank"
                >
                    <IconifyIcon icon="mdi:phone" class="me-2" />
                    725 695 145
                </BButton>
            </div>
        </div>

        <div class="col-12 col-lg-4">
            <div class="row">
                <div class="p-4 rounded-3 bg-light">
                    <h3>Náklady na bydlení:</h3>
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:radiator" class="fs-3 text-secondary me-2" />  
                        Vytápění: 500 Kč     
                    </div>  
                    <div class="d-flex align-items-center mb-3">
                        <IconifyIcon icon="mdi:shower" class="fs-3 text-secondary" />  
                        <div class="lh-sm ms-3">Voda (ohřev, vodné, stočné): 500 Kč</div>   
                    </div> 
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:lightbulb-on-outline" class="fs-3 text-secondary me-2" />  
                        Elektřina: 950 Kč     
                    </div> 
                    <div class="d-flex align-items-center mb-3">
                        <IconifyIcon icon="mdi:house-city-outline" class="fs-2 text-secondary" />  
                        <div class="lh-sm ms-3">Poplatek za správu budovy včetně fondu oprav: 1000 Kč </div>   
                    </div>
                    <div class="d-flex align-items-center">
                        <IconifyIcon icon="mdi:hand-coin-outline" class="fs-2 text-secondary" />  
                        <div class="lh-sm ms-3">Ostatní náklady (např. úklid, pojištění domu apod.): 500 Kč</div>    
                    </div>
                    <div class="mt-3"><b>Celkem 3 500 Kč</b> při obsazení bytu 2 osobami. </div>
                </div>

                <div class="p-4 rounded-3 bg-light mt-4">
                    <h3>Vyžití v&nbsp;okolí:</h3>
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:forest-outline" class="fs-3 text-secondary me-2" />  
                        <a class="link-primary" href="https://www.kudyznudy.cz/aktivity/koniklecova-louka-v-prirodni-rezervaci-kamenny-vrc" target="_blank">
                            Unikátní koniklecová louka
                        </a>     
                    </div>             
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:flower" class="fs-3 text-secondary me-2" />  
                        <a class="link-primary" href="https://www.novy-liskovec.cz/park-pod-plachtami/ds-1140" target="_blank">
                            Park Pod Plachtami
                        </a>     
                    </div>
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:fitness-center" class="fs-3 text-secondary me-2" />  
                        <a class="link-primary" href="https://www.fit4all.cz/cs" target="_blank">
                            Fitness centrum Fit4All
                        </a>    
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <IconifyIcon icon="mdi:house-city-outline" class="fs-3 text-secondary me-1" />  
                        <a class="link-primary" href="https://novy-liskovec.cz/komunitni-centrum-skala/ds-1389" target="_blank">
                            <div class="lh-sm ms-2">Komunitní a společenské centrum Skála</div>
                        </a>
                    </div>
                    <div class="mb-3">
                        <IconifyIcon icon="mdi:swimming-pool" class="fs-3 text-secondary me-2" />  
                        <a class="link-primary" href="https://aquapark.starez.cz/" target="_blank">
                            Aquapark Kohoutovice
                        </a>                        
                    </div>
                    <div>
                        <IconifyIcon icon="material-symbols:museum-outline" class="fs-3 text-secondary me-2" />  
                        <a class="link-primary" href="https://www.mzm.cz/pavilon-anthropos/" target="_blank">
                            Pavilon Anthropos
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>