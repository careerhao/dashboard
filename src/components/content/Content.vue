<template>
    <div class="content-page">
        <div class="content-page__wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content-page {
    overflow-y: scroll;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        flex: 1 1 100%;
        padding: 1.5rem;
        margin: auto;
        width: 100%;
        max-width: 100%;
    }
}
</style>