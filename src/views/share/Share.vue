<template>
    <div>
        <grid-layout
            ref="gridlayout"
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="false"
            :is-resizable="false"
            :vertical-compact="true"
            :use-css-transforms="true"
        >
            <grid-item
                v-for="(item, index) in layout"
                :key="`${item.i}_${index}`"
                :minW="4"
                :minH="8"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                class="share__items"
            >
                <Chart
                v-if="!isLoading"
                :isAdmin="false"
                :name="item.chart.name"
                :type="item.chart.type"
                :url="item.chart.url"
                :fetchBySql="item.chart.fetchBySql"
                />
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { GridLayout, GridItem } from "vue-grid-layout";
import currentProjectService from '@/services/currentProject';
import Chart from '@/components/charts/Chart';
export default {
    name: 'Share',
    components: {
        GridLayout,
        GridItem,
        Chart,
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    data() {
        return {
            isLoading: false,
            layout: [],
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            currentProjectService
                .getCurrentProject(this.$route.params.id)
                .then(res => {
                    // TODO: Remove if-else when we can hit real endpoint, no just pulling from data/projects.js
                    // refresh page may lead to error since we fetch data by project id.
                    (res && res.layout) ? this.layout = res.layout : [];
                    (res && res.chartOptions) ? this.chartOptions = res.chartOptions : [];
                    (res && res.chartOptions) ? this.projectName = res.name : '';
                    this.$store.dispatch('currentProject/setCurrentProject', res)
                }, err => {
                    console.error(err);
                    throw err;
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.share {
    &__items {

    }
}

// Grid layout background class
.vue-grid-layout {
    min-height: 30rem;
    touch-action: none;
}
// Items class
.vue-grid-item:not(.vue-grid-placeholder) {
    background: $white;
}

.vue-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;

    touch-action: none;

    box-sizing: border-box;
    overflow: hidden;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
</style>