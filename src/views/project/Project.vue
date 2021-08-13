<template>
    <div class="project">
        <el-container class="project-container">
            <el-aside :width="isCollapse ? '65px' : '250px'" class="project-aside">
                <el-menu default-active="1-4-1" class="project-menu" :collapse="isCollapse">
                    <!-- Switch would lead to vue-grid-layout responsive bug -->
                    <div class="project__sidebar-switch">
                        <!-- <i v-if="isCollapse" @click="toggleSidebar" class="el-icon-s-unfold project__sidebar-icon" />
                        <i v-else  @click="toggleSidebar" class="el-icon-s-fold project__sidebar-icon" /> -->
                        <!-- <span v-show="!isCollapse">Charts</span> -->
                        <el-autocomplete
                            class="project__search"
                            v-model="search"
                            :fetch-suggestions="querySearch"
                            placeholder="Charts"
                            @select="selectChart"
                        >
                            <i
                                class="el-icon-search el-input__icon"
                                slot="suffix"
                            >
                            </i>
                        </el-autocomplete>
                    </div>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-pie-chart"></i>
                            <span slot="title">Pie Chart</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">Pie1</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="1-2">Pie2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-data-line"></i>
                            <span slot="title">Line Chart</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">Line1</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="2-2">Line2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-data-analysis"></i>
                            <span slot="title">Bar Chart</span>
                        </template>
                        <el-menu-item-group>
                                <el-menu-item index="3-1">Bar1</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="3-2">Bar2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <div
                        @drag="drag"
                        @dragend="dragend"
                        class="droppable-element"
                        draggable="true"
                        unselectable="on"
                    >
                        Droppable Element (Drag me!)
                    </div>
                </el-menu>
            </el-aside>

            <el-main>
                <el-page-header @back="goBack" :content="currentProject.name">
                </el-page-header>
                <!-- <div>
                    Selected Project {{ this.$route.params.id }}
                </div> -->
                 <div id="content" class="project__content">
                    <grid-layout ref="gridlayout" :layout.sync="layout"
                         :col-num="12"
                         :row-height="30"
                         :is-draggable="true"
                         :is-resizable="true"
                         :vertical-compact="true"
                         :use-css-transforms="true"
                    >
                    <grid-item :key="item.i" v-for="item in layout"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
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

import { GridLayout, GridItem } from "vue-grid-layout"

let mouseXY = {"x": null, "y": null};
let DragPos = {"x": null, "y": null, "w": 4, "h": 6, "i": null};

export default {
    name: 'Project',
    components: {
        GridLayout,
        GridItem
    },
    data() {
        return {
            isCollapse: false,
            layout: [
                {"x":0,"y":0,"w":4,"h":6,"i":"0"},
                {"x":2,"y":0,"w":4,"h":4,"i":"1"},
                {"x":4,"y":0,"w":3,"h":5,"i":"2"},
            ],
            chartOptions: [
                {
                    id: '00000000-0000-0000-0000-000000000000',
                    value: 'Pie Chart1',
                    type: 'Pie Chart',
                },
                {
                    id: '00000000-0000-0000-0000-000000000001',
                    value: 'Pie Chart2',
                    type: 'Pie Chart',
                },
                {
                    id: '00000000-0000-0000-0000-000000000002',
                    value: 'Line Chart1',
                    type: 'Line Chart'
                },
                {
                    id: '00000000-0000-0000-0000-000000000003',
                    value: 'Bar Chart1',
                    type: 'Bar Chart',
                },
            ],
            search: '',
            draggingElement: {},
        };
    },
    created() {
        console.log(this.$route.params.id)
    },
     mounted() {
        document.addEventListener("dragover", function (e) {
            mouseXY.x = e.clientX;
            mouseXY.y = e.clientY;
        }, false);
    },
    computed: {
        ...mapState({
            currentProject: state => state.current_project.currentProject,
        }),
    },
    methods: {
        goBack() {
            this.$router.push({ path:'/projects' });
        },
        toggleSidebar() {
            console.log('toggle')
            this.isCollapse = !this.isCollapse;
        },
        querySearch(queryString, cb) {
            var chartOptions = this.chartOptions;
            var results = queryString ? chartOptions.filter(this.createFilter(queryString)) : chartOptions;
            cb(results);
        },
        createFilter(queryString) {
            return (chartOptions) => {
            return (chartOptions.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        selectChart(item) {
            console.log(item)
        },
        drag: function (e) {
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
        dragend: function (e) {
            let parentRect = document.getElementById('content').getBoundingClientRect();
            let mouseInGrid = false;
            if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right)) && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
                mouseInGrid = true;
            }
            if (mouseInGrid === true) {
                //alert(`Dropped element props:\n${JSON.stringify(DragPos, ['x', 'y', 'w', 'h'], 2)}`);
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

    &__sidebar-switch {
        padding: 10px;

        // display: flex;
        // align-items: center;
        // justify-content: space-between;

        // font-size: 1.125rem;
        // color: #909399;
        // padding: 0 1.25rem;
        // -webkit-transition: border-color .3s,background-color .3s,color .3s;
        // transition: border-color .3s,background-color .3s,color .3s;
        // -webkit-box-sizing: border-box;
        // box-sizing: border-box;

        // height: 3.5rem;
        // line-height: 3.5rem;
        // list-style: none;
        // position: relative;
        // white-space: nowrap;
        // margin: 0 4px;
    }

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

    &__search {
        width: 100%;
    }
}

.project-aside,
.project-menu,
.project-container {
    height: 100%;
}

.project-aside {
    border-top: 1px solid $almost-gray;
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

    box-sizing: content-box;
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
</style>