<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';  // Import computed from Vue
import '@fontsource-variable/onest';
import Logo from "../components/Logo.vue";

const route = useRoute();

const links = [
    {
        label: 'React',
        icon: 'i-mdi-react',
        to: '/react'
    },
    {
        label: 'Vue',
        icon: 'i-mdi-vuejs',
        to: '/vue'
    }
];

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set(value) {
        colorMode.preference = value ? 'dark' : 'light';
    }
});

const verticalLinksVue = [
    {
        label: 'Overview',
        icon: 'i-mdi-fruit-watermelon',
        to: '/vue'
    },
    {
        label: 'Installation',
        icon: 'i-solar-code-square-bold',
        to: '/vue/installation'
    },
    {
        label: 'Horizontal Navigation',
        icon: 'i-heroicons-chart-bar',
        to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
    },
    {
        label: 'Command Palette',
        icon: 'i-heroicons-command-line',
        to: '/components/command-palette'
    }
];

const verticalLinksReact = [
    {
        label: 'Overview',
        icon: 'i-mdi-fruit-watermelon',
        to: '/react'
    },
    {
        label: 'Installation',
        icon: 'i-solar-code-square-bold',
        to: '/react/installation'
    },
    {
        label: 'Horizontal Navigation',
        icon: 'i-heroicons-chart-bar',
        to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
    },
    {
        label: 'Command Palette',
        icon: 'i-heroicons-command-line',
        to: '/components/command-palette'
    }
];

const verticalLinks = computed(() => route.path.startsWith('/vue') ? verticalLinksVue : verticalLinksReact);
</script>

<template>
    <div class="border-b border-zinc-200 dark:border-zinc-800 font-onest">
        <nav class="max-w-7xl mx-auto items-center justify-between flex">
            <Logo />

            <UHorizontalNavigation :links="links" class="basis-0" />
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>
        </nav>
    </div>
    <div class="max-w-7xl mx-auto py-5 flex gap-5 font-onest">
        <UVerticalNavigation :links="verticalLinks" />
        <main>
            <slot />
        </main>
    </div>
</template>
