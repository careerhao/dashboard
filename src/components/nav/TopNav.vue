<template>
    <nav class="nav">
        <div class="nav__content">
            <div class="nav__left">
                <div class="nav__home" @click="backToHome">
                    <i class="el-icon-s-home nav__left-icon" />
                    <span>Dashboard</span>
                </div>
                <div class="nav__projects">
                    <el-dropdown size="small" trigger="click">
                        <el-button plain size="small" class="nav__projects--left-button">
                            {{ currentLang.myProject }}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                v-for="project in getProjectLists"
                                class="el-dropdown-items"
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
            </div>
            
            <div class="nav__right">
                <el-dropdown trigger="click">
                    <div class="nav__right-icon">
                        <TranslateIcon />
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item 
                            class="el-dropdown-items"
                            @click.native="selectLanguage('zh_CN')"
                        >
                            简体中文
                        </el-dropdown-item>
                        <el-dropdown-item
                            class="el-dropdown-items"
                            @click.native="selectLanguage('en')"
                        >
                            English
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <project-create
			v-if="isCreateProjectModalOpen"
			@submitForm="createNewProject"
			@toggleCreateProjectModal="toggleCreateProjectModal"
		/>
    </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import projectServices from '@/services/projectList';
import ProjectCreate from '@/components/project-create/ProjectCreate';
import TranslateIcon from '@/components/icons/TranslateIcon'
import { guid } from '@/utils';

export default {
    name: 'TopNav',
    components: {
        ProjectCreate,
        TranslateIcon,
    },
    mounted() {
        this.fetchData();
    },
    data() {
        return {
            search: '',
        }
    },
    computed: {
        ...mapState({
            projects: state => state.projects.projectList,
            isCreateProjectModalOpen: state => state.projects.createProjectModalOpen,
        }),
        ...mapGetters('projects', {
            getProjectLists: 'sortProjectListByTimestamp',
            isProjectCreating: 'isProjectCreating',
        }),
        ...mapGetters('config', {
            currentLang: 'currentLang',
        })
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
        selectLanguage(lang) {
            this.$store.dispatch('config/selectLanguage', lang);
        },
        selectProject(projectId) {
            console.log('????')
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
        createNewProject(data) {
			const payload = {
				id: guid(), // Id should be created by backend, remove this when we can hit real endpoint
			  	name: data.name,
			  	description: data.description,
				timestamp: Date.parse(new Date())
			  }

			this.$store.dispatch('projects/createProject', payload);
			this.toggleCreateProjectModal();
			this.$store.dispatch('projects/setCreating', payload.id)
			  projectServices
			  	.createProject({
					body: payload,
					projectId: payload.id, // For name check, remove this and only need project data when we can hit real endpoints
				})
				.then(res => {
					if(res.status === 204) {
						this.$notify({
                            title: `${this.currentLang.message.success}`,
                            message: `${payload.name} ${this.currengLang.message.createSuccess}`,
                            type: 'success',
							duration: 2000,
							offset: 50
                        });
                        
                        this.selectProject(payload.id);
					}
				})
				.catch(err => {
					this.$notify.error({
          				title: `${this.currentLang.message.error}`,
						message: `${payload.name} ${this.currentLang.message.createFail}`,
						duration: 0,
						offset: 50
					});

					// TODO: remove payload from store if failed, after remove function done

					throw new Error(err);
				})
				.finally(() => {
					this.$store.dispatch('projects/finishCreate', payload.id);
				})
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
        padding: 0 8rem;

        &--right-button {
            // margin-left: 0 !important;
            padding-left: 5px !important;
            padding-right: 5px !important;
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;

            color: $gray;
        }
        &--left-button {
            margin-right: 0 !important;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            // overwrite el-button padding so use px instead of rem
            padding: 9px 50px !important;
            color: $gray;
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

    &__right-icon {
        height: 1.5rem;
        width: 1.5rem;

        cursor: pointer;

        svg {
            fill: $gray;
        }
    }
}

/deep/ .el-autocomplete-suggestion {
    box-shadow: unset;
}
</style>