<template>
    <div class="top-bar">
        <div class="top-bar__logo">
            Eryk Miszczuk
        </div>
        <Spacer />
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
    border-bottom: .1em solid colors.$colorSecondary;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.top-bar__logo {
    color: colors.$colorTextLight;
    font-family: 'Spartan', sans-serif;
    text-transform: uppercase;
    font-size: 1.5em;
    margin-left: 1em;
}

</style>