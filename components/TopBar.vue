<template>
    <div class="top-bar">
        <div class="top-bar__logo"></div>
        <div class="top-bar__menu">
            <MainMenu />
        </div>
    </div>
</template>

<script>
export default {
    name: 'top-bar'
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.top-bar {
    background-color: colors.$colorPrimary;
}

</style>