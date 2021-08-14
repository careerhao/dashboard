<template>
    <nav class="nav">
        <div class="nav__content">
            <div class="nav__left" @click="backToHome">
                <i class="el-icon-s-home nav__left-icon" />
                <span>Dashboard</span>
            </div>
            <div class="nav__right">
                <span>Hao</span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TopNav',
    methods: {
        backToHome() {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.nav {
    display: flex;
    
    height: 100%;
    width: 100%;
    
    background-color: $white; 
    color: $almost-black; 
    fill: $almost-black;

    border-bottom: 1px solid $almost-gray;

    &__left {
        color: $gray;
        font-size: 1.125rem;

        cursor: pointer;
    }

    &__left-icon {
        padding: 0 .5rem;
    }

    &__content {
        align-items: center;
        display: flex;
        justify-content: space-between;

        padding-left: 1rem;
        padding-right: 2rem;
        width: 100%;
    }
}
</style>