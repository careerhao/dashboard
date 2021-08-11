<template>
    <el-row>
        <el-col :span="24">
            <nav class="nav">
                <div class="nav__content">
                    <div class="nav__left">
                        <span>Dashboard</span>
                    </div>
                    <div class="nav__right">
                        <span>Hao</span>
                    </div>
                </div>
            </nav>
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/modules/_all';

.nav {
    display: flex;
    position: relative;
    
    padding-left: 1rem;
    padding-right: 2rem;

    height: 4.0625rem;
    background-color: $white; 
    color: $almost-black; 
    fill: $almost-black;
    box-shadow: $box-shadow;

    &__content {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}
</style>