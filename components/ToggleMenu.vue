<template>
    <div 
        :class="[ checked ? 'toggle-menu--active' : 'toggle-menu']"
        @click="$emit('click')"
    >
        <div class="toggle-menu__bar--top"></div>
        <div class="toggle-menu__bar--middle"></div>
        <div class="toggle-menu__bar--bottom"></div>
    </div> 
</template>

<script>
export default {
    name: "toggle-menu",
    props: {
        checked: Boolean
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.toggle-menu {
    $this: &;
    margin-right: 1em;
    width: 3em;
    height: 3em;
    padding: 0.5em;
    position: relative;
    box-sizing: border-box;

    &__bar {
        background-color: colors.$colorLight;
        height: .15em;
        width: 100%;
        position: relative;
        $this: &;

        &--top {
            @extend #{$this};
            top: 10%;
        }

        &--middle {
            @extend #{$this};
            top: 40%;
        }

        &--bottom {
            @extend #{$this};
            top: 70%;
        }
    }

    &--active {
        @extend .toggle-menu;

        .toggle-menu__bar {
            &--top {
                top: 40%;
                transform: rotate(45deg);
            }

            &--middle {
                top: 40%;
                display: none;
            }

            &--bottom {
                top: 35%;
                transform: rotate(-45deg);
            }
        }
    }
}
</style>