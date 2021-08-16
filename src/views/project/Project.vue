<template>
    <div class="project">
        <el-container class="project-container">
            <el-aside :width="isCollapse ? '65px' : '250px'" class="project-aside">
                <el-menu default-active="1-4-1" class="project-menu" :collapse="isCollapse">
                    <el-submenu
                        v-for="charts in chartOptions"
                        :key="`charts_${charts.id}`"
                        :index="charts.id"
                    >
                        <template
                            slot="title"
                        >
                            <i :class="charts.icon" />
                            <span slot="title"> {{ charts.value }}</span>
                        </template>
                        <el-menu-item-group
                            v-for="(chart,i) in charts.categories"
                            :key="`categroies_${i}`"
                        >
                            <el-menu-item
                                :index="`chart_${i}`"
                            >
                                <div
                                    @dragstart="dragstart(chart)"
                                    @drag="drag"
                                    @dragend="dragend"
                                    class="droppable-element"
                                    draggable="true"
                                    unselectable="on"
                                >
                                    <chart-card 
                                        :name="chart.name" 
                                        :imageurl="chart.thumburl"
                                    />
                                </div>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <div class="project__header">
                    {{ projectName }}
                </div>
                 <div id="content" class="project__content" >
                    <grid-layout
                        ref="gridlayout"
                        :layout.sync="layout"
                        :col-num="12"
                        :row-height="30"
                        :is-draggable="true"
                        :is-resizable="true"
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
                            class="project__content-items"
                        >
                          <Chart
                            v-if="!isDragging"
                            :name="item.chart.name"
                            :type="item.chart.type"
                            :url="item.chart.url"
                            :fetchBySql="item.chart.fetchBySql"
                            @remove="confirmRemove(item)"
                            @edit="editChart(item)"
                          />
                    </grid-item>
                    </grid-layout>
                </div>
            </el-main>
        </el-container>

        <el-dialog
            title="Warning"
            :visible.sync="isConfirmRemoveShow"
            width="30%"
        >       
                <span>Are you confirm to remove </span>
                <strong><label class="confirm-modal__warning">{{ `${removingItemName} ?` }}</label></strong>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary"  @click.native="cancelRemove">Cancel</el-button>
                    <el-button class="button-plain--overwrite" @click.native="removeChart">Confirm</el-button>
                </span>
        </el-dialog>

        <!-- Must be use v-if, el-dialog bug cannot be destoried -->
        <chart-edit 
            v-if="isEditShow"
            :chart-data="editingChart"
            @submitForm="submitChartChanges"
            @toggleEditChartDialog="toggleEditChartDialog"
        />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { GridLayout, GridItem } from "vue-grid-layout"
import currentProjectService from '@/services/currentProject'
import ChartCard from '@/components/charts/chart-card/ChartCard'
import Chart from '@/components/charts/Chart'
import ChartEdit from '@/components/charts/ChartEdit'

let mouseXY = {"x": null, "y": null};
let DragPos = {"x": null, "y": null, "w": 5, "h": 8, "i": null};

export default {
    name: 'Project',
    components: {
        GridLayout,
        GridItem,
        ChartCard,
        Chart,
        ChartEdit,
    },
    data() {
        return {
            isCollapse: false,
            layout: [],
            chartOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                categories: [
                    {   id: '00000001-0000-0000-0000-000000000000',
                        type: 'pie-chart',
                        name: 'Pie Chart1',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964'
                    },
                    {
                        id: '00000002-0000-0000-0000-000000000000',
                        type: 'rose-pie-chart',
                        name: 'Pie Chart2',
                        thumburl: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964'
                    }
                ],
                value: 'Pie Chart',
                icon: 'el-icon-pie-chart',
            }],
            draggingElement: {},
            draggingChart: {},
            projectName: '',
            isDragging: false,
            isConfirmRemoveShow: false,
            removingItem: null,
            editingChart: {},
        };
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    created() {
        this.fetchData()
    },
    mounted() {
        document.addEventListener("dragover", function (e) {
            mouseXY.x = e.clientX;
            mouseXY.y = e.clientY;
        }, false);
    },
    computed: {
        ...mapState({
            isEditShow: state => state.currentProject.isEditChartShow,
        }),
        ...mapGetters('currentProject',{
            getCurrentProjectId: 'currentProjectId',
        }),
        removingItemName() {
            return this.removingItem 
                    && this.removingItem.chart 
                    && this.removingItem.chart.name !== ''
                        ? this.removingItem.chart.name
                        : 'this chart';
        },
    },
    methods: {
        fetchData(id) {
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
        },
        goBack() {
            this.$router.push({ path:'/projects' });
        },
        toggleSidebar() {
            this.isCollapse = !this.isCollapse;
        },
        selectChart(item) {
            console.log(item)
        },
        dragstart(chart) {
            this.draggingChart = {
                id: chart.id,
                name: chart.name,
                type: chart.type,
                url: '',
            };
            this.isDragging = true;
        },
        drag(e) {
            let parentRect = document.getElementById('content').getBoundingClientRect();
            let mouseInGrid = false;

            this.draggingElement = {};

            if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right)) && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
                mouseInGrid = true;
            }
            if (mouseInGrid === true && (this.layout.findIndex(item => item.i === 'drop')) === -1) {
                this.layout.push({
                    x: (this.layout.length * 2) % (this.colNum || 12),
                    y: this.layout.length + (this.colNum || 12), // puts it at the bottom
                    w: 1,
                    h: 1,
                    i: 'drop',
                });
            }
            let index = this.layout.findIndex(item => item.i === 'drop');
            if (index !== -1) {
                try {
                    this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "none";
                } catch {
                }
                let el = this.$refs.gridlayout.$children[index];
                el.dragging = {"top": mouseXY.y - parentRect.top, "left": mouseXY.x - parentRect.left};
                let new_pos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left);
                if (mouseInGrid === true) {
                    this.$refs.gridlayout.dragEvent('dragstart', 'drop', new_pos.x, new_pos.y, 1, 1);
                    DragPos.i = String(index);
                    DragPos.x = this.layout[index].x;
                    DragPos.y = this.layout[index].y;
                }
                if (mouseInGrid === false) {
                    this.$refs.gridlayout.dragEvent('dragend', 'drop', new_pos.x, new_pos.y, 1, 1);
                    this.layout = this.layout.filter(obj => obj.i !== 'drop');
                }
            }
        },
        dragend(e) {
            let parentRect = document.getElementById('content').getBoundingClientRect();
            let mouseInGrid = false;
            if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right)) && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
                mouseInGrid = true;
            }
            if (mouseInGrid === true) {
                this.$refs.gridlayout.dragEvent('dragend', 'drop', DragPos.x, DragPos.y, 1, 1);
                this.layout = this.layout.filter(obj => obj.i !== 'drop');

                 this.draggingElement = {
                    x: DragPos.x,
                    y: DragPos.y,
                    w: DragPos.w,
                    h: DragPos.h,
                    i: DragPos.i,
                    chart: this.draggingChart,
                };
               }
               this.isDragging = false;
               this.putDownNewElement();
            },
        putDownNewElement() {
            this.layout.push({
                    x: DragPos.x,
                    y: DragPos.y,
                    w: DragPos.w,
                    h: DragPos.h,
                    i: DragPos.i,
                    chart: this.draggingChart,
            });
            //this.$refs.gridLayout.dragEvent('dragend', DragPos.i, DragPos.x,DragPos.y,1,1);
            try {
                this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="block";
            } catch {
            }
            this.draggingChart = {};
        },
        confirmRemove(item) {
            this.removingItem = item;

            this.isConfirmRemoveShow = true;
        },
        removeChart() {
            const index = this.layout.findIndex(i => i === this.removingItem);
            this.layout.splice(index, 1);

            this.isConfirmRemoveShow = false;
        },
        cancelRemove() {
            this.isConfirmRemoveShow = false;
        },
        editChart(item) {
            this.editingChart = item.chart;
            this.toggleEditChartDialog();
        },
        toggleEditChartDialog () {
            this.$store.dispatch('currentProject/toggleEditChartShow');
        },
        submitChartChanges(data) {
            this.toggleEditChartDialog();
            this.isEditing = true
            currentProjectService
                .updateChart({
                    projectId: this.getCurrentProjectId,
                    chartId: data.id,
                    body: data,
                })
                .then(res => {
                    if(res.status === 204) {
                        this.isEditing = false;

                        this.$notify({
                            title: 'Success',
                            message: `${data.name} has been updated`,
                            type: 'success',
                            duration: 2000,
                        });
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.project {
    display: flex;
    flex-grow: 2;

    overflow-x: hidden;

    &__sidebar-icon {
        vertical-align: middle;
        margin-right: .3125rem;
        width: 1.125rem;
        text-align: center;
        font-size: 1.125rem;

        cursor: pointer;
    }

    &__content {
        flex: 1;
        padding: 1rem 0;
    }

    &__content-items {
        box-sizing: border-box;
    }

    &__search {
        width: 100%;
    }
}

.project-aside, .project-container {
    height: 100%;
}
.project-menu {
    overflow: auto;
    height: 100%;
    padding-bottom: 1rem;
}

.project-aside {
    border-top: 1px solid $almost-gray;
    overflow: hidden;
}

.header-container {
    text-align: right;
    font-size: 12px;
    background-color: #545c64;
}

.project-aside:not(.el-menu--collapse) {
    width: 200px;
}

// Grid layout background class
.vue-grid-layout {
    min-height: 30rem;
    border: 1px dashed $gray;
    touch-action: none;
}
// Items class
.vue-grid-item:not(.vue-grid-placeholder) {
    background: $white;
    border: 1px solid $almost-gray;
}

.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;

    touch-action: none;

    box-sizing: border-box;
    overflow: hidden;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}

.chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

/deep/ .el-menu-item, .el-menu--inline {
    min-width: 170px !important;
}

.confirm-modal {
    &__warning {
        color: $almost-red;
    }
}
</style>