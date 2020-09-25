<template>
    <div class="top-bar">
        <div class="top-bar__logo">
            Eryk Miszczuk
        </div>
        <Spacer />
        <div class="top-bar__menu">

            <div 
                class="button"
                @click="toggleMainMenu"
                v-if="showMainMenuButton"
            >
                H
            </div> 
            <MainMenu v-if="showMainMenu"/>

        </div>
    </div>
</template>

<script>
export default {
    name: 'top-bar',
    data() {
        return {
            showMainMenu: true,
            showMainMenuButton: false,
        }
    },
    mounted() {
        let mediaQuery = window.matchMedia(" (max-width: 768px) ");
        console.log(mediaQuery);
        mediaQuery.addListener(e => {
            if (e.matches) {
                this.showMainMenu = false;
                this.showMainMenuButton = true;
            } else {
                this.showMainMenu = true;
                this.showMainMenuButton = false;
            }
        })
    },
    methods: {
        toggleMainMenu() {
            this.showMainMenu = !this.showMainMenu
        }
    }
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
    font-size: clamp(1em, 2vh, 1.5em);
    margin-left: 1em;
}

.button {
    width: 3em;
    height: 3em;
    background: red;
}

@media (max-width: 768px) {
    .top-bar {
        flex-direction: column;
        align-items: center;
    }
}
</style>