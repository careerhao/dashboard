<template>
    <div class="empty-chart" >
       <div class="empty-chart__wrapper">
            <div class="empty-chart__background">
                <span>{{ currentLang.emptyMessage }}</span>
            </div>
            <div class="empty-chart__button">
                <el-button 
                    type="primary" 
                    class="button--overwrite button-primary--overwrite" 
                    @click.native="editFromEmpty"
                >
                    {{ currentLang.edit }}
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'EmptyChart',
    computed: {
        ...mapGetters('config', {
            currentLang: 'currentLang',
        })
    },
    methods: {
        editFromEmpty() {
            this.$emit('editFromEmpty');
        }
    },

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

        background-color: $white;
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