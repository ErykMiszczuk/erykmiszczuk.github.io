<template>
    <div class="app theme--default">
        <TopBar />
        <MainArea />
        <BottomBar />
    </div>
</template>

<script>
export default {
    head() {
        return this.$nuxtI18nSeo()
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

html {
    margin: 0;
    font-size: 1em;
    background-color: colors.$colorLight;
    box-sizing: border-box;
}

body {
    margin: 0;
}

</style>