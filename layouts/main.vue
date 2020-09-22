<template>
    <div class="app">
        <main-menu />
        <Nuxt />
    </div>
</template>

<script>
export default {
    head() {
        return this.$nuxtI18nSeo()
    }
}
</script>