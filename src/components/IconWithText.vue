<template>
    <div>
        <IconifyIcon 
            :icon="icon" 
            class="fs-3 text-secondary me-2" 
        />  
        <a 
            class="link-primary" 
            target="_blank"
            :href="link" 
        >
        <component
            :is="link ? 'a' : 'div'"
            :href="link ?? undefined"
            :target="link ? '_blank' : undefined"            
        ></component>
            
            {{ text }}
        </a>
    </div>
</template>

<script setup lang="ts">

export interface IconWithTextProps {
    icon: string
    link?: string
    text: string
}

defineProps<IconWithTextProps>()

</script>