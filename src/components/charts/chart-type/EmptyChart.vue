<template>
    <div class="empty-chart" >
       <div class="empty-chart__wrapper">
            <div class="empty-chart__background">
                <span>Please fill in the data</span>
            </div>
            <div class="empty-chart__button">
                <el-button plain>Edit</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmptyChart',
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.empty-chart {
    height: 100%;
    width: 100%;

    &__background {
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        background-color: $light-gray;
        color: $almost-black;
    }

    &__wrapper {
        display: flex;
        justify-content: center;
    }

    &__button {
        position: absolute;
        padding: 14px;
        top: 70%;
    }
}
</style>