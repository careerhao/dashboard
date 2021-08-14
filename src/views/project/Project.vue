<template>
    <div class="project">
        <el-container class="project-container">
            <el-aside :width="isCollapse ? '65px' : '250px'" class="project-aside">
                <el-menu v-if="chartOptions.length > 0" default-active="1-4-1" class="project-menu" :collapse="isCollapse">
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
                                    @drag="drag"
                                    @dragend="dragend"
                                    class="droppable-element"
                                    draggable="true"
                                    unselectable="on"
                                >
                                    <chart-card :name="chart.name" :imageurl="chart.thumburl"/>
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
                 <div id="content" class="project__content" v-if="layout.length > 0">
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
                            v-for="(item) in layout"
                            :key="item.i" 
                            :x="item.x"
                            :y="item.y"
                            :w="item.w"
                            :h="item.h"
                            :i="item.i"
                            class="project__content-items"
                        >
                          <span class="text">{{ item.i }}</span>
                    </grid-item>
                    </grid-layout>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import currentProjectService from '@/services/currentProject'
import ChartCard from '@/components/charts/chart-card/ChartCard'

import { GridLayout, GridItem } from "vue-grid-layout"

let mouseXY = {"x": null, "y": null};
let DragPos = {"x": null, "y": null, "w": 4, "h": 4, "i": null};

export default {
    name: 'Project',
    components: {
        GridLayout,
        GridItem,
        ChartCard,
    },
    data() {
        return {
            isCollapse: false,
            layout: [],
            chartOptions: [],
            draggingElement: {},
            projectName: '',
        };
    },
    created() {
        this.fetchData(this.$route.params.id)
    },
    mounted() {
        document.addEventListener("dragover", function (e) {
            mouseXY.x = e.clientX;
            mouseXY.y = e.clientY;
        }, false);
    },
    computed: {},
    methods: {
        fetchData(id) {
            currentProjectService
                .getCurrentProject(id)
                .then(res => {
                    this.layout = res.layout;
                    this.chartOptions = res.chartOptions;
                    this.projectName = res.name;
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
                };
               }
               this.putDownNewElement();
            },
        putDownNewElement() {
            this.layout.push({
                    x: DragPos.x,
                    y: DragPos.y,
                    w: DragPos.w,
                    h: DragPos.h,
                    i: DragPos.i,
            });
            this.$refs.gridLayout.dragEvent('dragend', DragPos.i, DragPos.x,DragPos.y,1,1);
            try {
                this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="block";
            } catch {
                console.log("Something wrong")
            }
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
</style>