<template>
    <div class="project">
        <el-page-header @back="goBack" :content="currentProject.name">
        </el-page-header>
        <div>
            Selected Project {{ this.$route.params.id }}
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'project',
    data() {
        return {};
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>