<template>
    <div class="chart">
        <component
            ref="chart"
            class='chart__canvas'
            :is="chartType"
            :name="name"
            :url="url"
            :fetchBySql="fetchBySql"
            @editFromEmpty="edit"
        />
        <div class="chart__features" v-if="isAdmin">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <i class="el-icon-setting" />
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item 
                        icon="el-icon-refresh" 
                        class="el-dropdown-items"
                        :disabled="isEmptyChart"
                        @click.native="refresh"
                    >
                        Refresh
                    </el-dropdown-item>
                    <el-dropdown-item 
                        icon="el-icon-edit" 
                        class="el-dropdown-items"
                        @click.native="edit"
                    >
                        Edit
                    </el-dropdown-item>
                    <el-dropdown-item 
                        icon="el-icon-delete" 
                        class="el-dropdown-items--danger" 
                        divided
                        @click.native="remove"
                    >
                        Remove
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import PieChart from './chart-type/PieChart';
import RosePieChart from './chart-type/RosePieChart';
import LineChart from './chart-type/LineChart';
import EmptyChart from './chart-type/EmptyChart';
import BarChart from './chart-type/BarChart';

export default {
    name: 'Chart',
    components: {
        PieChart,
        RosePieChart,
        LineChart,
        BarChart,
        EmptyChart,
    },
    props: {
        name: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
        fetchBySql: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    computed: {
        isEmptyChart() {
            return this.url === '';
        },
        chartType() {
            return this.isEmptyChart ? 'empty-chart' : this.type;
        },
    },
    methods: {
        refresh() {
            this.$refs.chart.refresh();
        },
        edit() {
            this.$emit('edit');
        },
        remove() {
            this.$emit('remove');
        },
    }
}
</script>

<style lang='scss'>
@import '@/assets/main';

.chart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    &__canvas {
        > * {
            height: 100%;
            width: 100%;
        }

        canvas {
            width: 100%;
            height: auto;
            min-height: 320px;
        }
    }

    &__features {
        position: absolute;
        right: 10px;
        top: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 2rem;
        width: 2rem;

        i {
            color: $gray;
            font-size: 1.125rem;

            cursor: pointer;
        }
    }
}

</style>
