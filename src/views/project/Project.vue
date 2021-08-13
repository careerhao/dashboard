<template>
    <div class="project">
        <el-container class="project-container">
            <el-aside :width="isCollapse ? '65px' : '250px'" class="project-aside">
                <el-menu default-active="1-4-1" class="project-menu" :collapse="isCollapse">
                    <div class="project__sidebar-switch">
                        <i v-if="isCollapse" @click="toggleSidebar" class="el-icon-s-unfold project__sidebar-icon" />
                        <i v-else  @click="toggleSidebar" class="el-icon-s-fold project__sidebar-icon" />
                        <span v-show="!isCollapse">Charts</span>
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
                </el-menu>
            </el-aside>
        
            <el-main>
                <el-page-header @back="goBack" :content="currentProject.name">
                </el-page-header>
                <div>
                    Selected Project {{ this.$route.params.id }}
                </div>
            </el-main>
        </el-container>  
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'project',
    data() {
        return {
            isCollapse: true
        };
    },
    created() {
        console.log(this.$route.params.id)
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
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 1.125rem;
        color: #909399;
        border-bottom: 1px solid $almost-gray;
        padding: 0 1.25rem;
        -webkit-transition: border-color .3s,background-color .3s,color .3s;
        transition: border-color .3s,background-color .3s,color .3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        height: 3.5rem;
        line-height: 3.5rem;
        list-style: none;
        position: relative;
        white-space: nowrap;
        margin: 0 4px;
    }

    &__sidebar-icon {
        vertical-align: middle;
        margin-right: .3125rem;
        width: 1.125rem;
        text-align: center;
        font-size: 1.125rem;

        cursor: pointer;
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
</style>