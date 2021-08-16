<template>
    <nav class="nav">
        <div class="nav__content">
            <div class="nav__left" @click="backToHome">
                <div class="nav__home">
                    <i class="el-icon-s-home nav__left-icon" />
                    <span>Dashboard</span>
                </div>
            </div>
            <div class="nav__right">
                <div class="nav__projects">
                    <el-dropdown trigger="click" size="small">
                        <el-button plain size="small" class="nav__projects--left-button">
                            My projects
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                v-for="project in getProjectLists"
                                :key="project.id"
                                :disabled="isProjectCreating(project.id)"
                                @click.native="selectProject(project.id)"
                            >
                                {{ project.name }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button 
                        plain 
                        size="small" 
                        class="nav__projects--right-button"
                        @click.native="createProject"
                    >
                        <i class="el-icon-plus" />
                    </el-button>
                </div>
                <!-- <span>Hao</span> -->
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import projectServices from '@/services/projectList';

export default {
    name: 'TopNav',
    mounted() {
        this.fetchData();
    },
    computed: {
        ...mapState({
            projects: state => state.projects.projectList,
        }),
        ...mapGetters('projects', {
            getProjectLists: 'sortProjectListByTimestamp',
            isProjectCreating: 'isProjectCreating',
		}),
    },
    methods: {
        fetchData() {
            this.$store.dispatch('projects/setLoading', true)
			projectServices
				.getProjects()
				.then(res => {
                    this.$store.dispatch('projects/init', res.list);
                    this.$store.dispatch('projects/setLoading', false);
				}, err => {
                console.error(err);
                this.$store.dispatch('projects/setLoading', false)
				throw err;
			})
		},
        backToHome() {
            this.$router.push({
                path: '/'
            })
        },
        selectProject(projectId) {
			this.$router.push({
				path: `/projects/${projectId}`,
			});
			this.$store.dispatch('projects/modifyProjectInfo', {
				projectId: projectId,
				data: {
					timestamp: Date.parse(new Date())
				}
			});
        },
	  	toggleCreateProjectModal() {
            this.$store.dispatch('projects/toggleCreateProject');
        },
		createProject() {
			this.toggleCreateProjectModal();
		},
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.nav {
    display: flex;

    height: 100%;
    width: 100%;

    background-color: $white;
    color: $almost-black;
    fill: $almost-black;

    border-bottom: 1px solid $almost-gray;

    &__left {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__projects {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--right-button {
            // margin-left: 0 !important;
            padding-left: 5px !important;
            padding-right: 5px !important;
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
        }
        &--left-button {
            margin-right: 0 !important;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    &__home {
        color: $gray;
        font-size: 1.125rem;

        cursor: pointer;
    }


	&__left-features {
		display: flex;
		justify-content: space-between;
		align-items: center;

        padding: 0 1rem;
	}

    &__left-icon {
        padding: 0 .5rem;
    }

    &__content {
        align-items: center;
        display: flex;
        justify-content: space-between;

        padding-left: 1rem;
        padding-right: 2rem;
        width: 100%;
    }
}

/deep/.el-input__inner {
    border:0;
}

/deep/ .el-autocomplete-suggestion {
    box-shadow: unset;
}
</style>