<template>
    <div class="top-bar">
        <div class="top-bar__logo">
            Eryk Miszczuk
        </div>
        <Spacer />
        <ToggleMenu
            v-if="showMainMenuButton"
            :checked="showMainMenu"
            @click="toggleMainMenu"
        />
        <div class="top-bar__menu">

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
            this.watchWindowWidth();
        },
    methods: {
        toggleMainMenu() {
            this.showMainMenu = !this.showMainMenu;
        },
        watchWindowWidth() {
            let mediaQuery = window.matchMedia(" (max-width: 768px) ");
            mediaQuery.addEventListener("change", e => {
                if (e.matches) {
                    this.showMainMenu = false;
                    this.showMainMenuButton = true;
                } else {
                    this.showMainMenu = true;
                    this.showMainMenuButton = false;
                }
            })
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

@media (max-width: 768px) {
    .top-bar {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .top-bar__menu {
        width: 100%;
    }
}
</style>