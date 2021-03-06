<template>
    <div class="project-root">
		<el-row>
			<el-col class="project-root__header">
				<!-- Shold this alive or not? -->
				<!-- <div>
					<el-autocomplete
						class="project-root__search"
						v-model="search"
						:fetch-suggestions="querySearch"
						:placeholder="currentLang.search"
						@select="selectProject"
					>
						<i
    						class="el-icon-search el-input__icon"
    						slot="suffix"
    					>
  						</i>
					</el-autocomplete>
				</div> -->
				<!-- <div>
					<el-button
						plain
						class="project-root__button button-plain--overwrite"
						icon="el-icon-circle-plus-outline"
						@click="createProject"
					>
						<span class="project-root__text">Create</span>
					</el-button>
				</div> -->
			</el-col>
		</el-row>
		<div class="project-root__wrapper">
			<ProjectCard
				:editing="editingProjectInfo.id"
				:projects="getProjectLists"
				@editProject="editProject"
				@selectProject="selectProject"
				@removeProject="removeProject"
				@shareProject="shareProject"
			/>
		</div>

		<project-update
			v-if="isEditingProjectModalOpen"
			:projectInfo="editingProjectInfo"
			@toggleEditProjectModal="toggleEditProjectModal"
			@submitForm="submitUpdate"
		/>

		<project-share
			v-if="isSharingProjectModalOpen"
			:projectInfo="editingProjectInfo"
			@toggleShareProjectModal="toggleShareProjectModal"
		/>

		<el-dialog
            :title="currentLang.removeModal.name"
            :visible.sync="removeProjectConfirm"
            width="30%"
        >       
                <span>{{ currentLang.removeModal.message }} </span>
                <strong><label class="confirm-modal__warning">{{ `${editingProjectInfo.name} ?` }}</label></strong>
                <span slot="footer" class="dialog-footer">
                    <el-button 
						type="plain" 
						class="button--overwrite button-secondary--overwrite" 
						@click.native="toggleRemoveConfimation"
					>
						{{ currentLang.cancel }}
					</el-button>
                    <el-button 
						type="primary" 
						class="button--overwrite button-primary--overwrite" 
						@click.native="confirmRemove"
					>
						{{ currentLang.confirm }}
					</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import ProjectCard from '@/components/project-card/ProjectCard';
import ProjectUpdate from '@/components/project-update/ProjectUpdate';
import ProjectShare from '@/components/project-share/ProjectShare';
import projectServices from '@/services/projectList';

export default {
	name: 'ProjectRoot',
    components: {
		ProjectCard,
		ProjectUpdate,
		ProjectShare,
	},
	data() {
		return {
			search: '',
			filteredProjecs: [],
			isEditingProject: false,
			editingProjectInfo: {},
			removeProjectConfirm: false,
			removingProject: {},
		}
	},
	computed: {
		...mapState({
			projects: state => state.projects.projectList,
			isEditingProjectModalOpen: state => state.projects.isEditingProjectModalOpen,
			isSharingProjectModalOpen: state => state.projects.isSharingProjectModalOpen,
		}),
		...mapGetters('projects', {
			isProjectLoading: 'isProjectLoading',
			getProjectLists: 'sortProjectListByTimestamp',
		}),
		...mapGetters('config', {
			currentLang: 'currentLang',
		}),
	},
	methods: {
		selectProject(project) {
			this.$router.push({
				path: `/projects/${project.id}`,
			});
			this.$store.dispatch('projects/modifyProjectInfo', {
				projectId: project.id,
				data: {
					timestamp: Date.parse(new Date())
				}
			});
		},
		querySearch(queryString, cb) {
        	let filteredProjecs = this.getProjectLists.map(item => ({
				...item,
				value: item.name,
			}));
        	let results = queryString ? filteredProjecs.filter(this.createFilter(queryString)) : filteredProjecs;

        	cb(results);
      	},
      	createFilter(queryString) {
        	return (filteredProjecs) => {
          		return (filteredProjecs.value.toLowerCase().includes(queryString));
        	};
		},
		toggleEditProjectModal() {
			this.$store.dispatch('projects/toggleEditProject')
		},
		editProject(project) {
			this.editingProjectInfo = project;

			this.toggleEditProjectModal();
		},
		submitUpdate(form) {
			this.$store.dispatch('projects/toggleEditProject')
			this.isEditingProject = true;
			projectServices
			  	.updateProject({
					projectId: form.id,
					body: form,
				})
				.then(res => {
					if(res.status === 204) {
						// this.isEditingProject = false;
						// this.editingProjectInfo = {};
						this.$notify({
                            title: `${this.currentLang.message.success}`,
                            message: `${form.name} ${this.currentLang.message.updateSuccess}`,
                            type: 'success',
							duration: 2000,
							offset: 50
						});
						this.$store.dispatch('projects/modifyProjectInfo', {
							projectId: form.id,
							data: {
								name: form.name,
								description: form.description,
								timestamp: Date.parse(new Date()),
							}
						});
					} else {
						// for cannot catch err
					}
				})
				.catch(err => {
					this.isEditingProject = false;
					this.$notify.error({
          				title: `${this.currentLang.message.error}`,
						message: `${form.name} ${this.currentLang.message.updateFail}`,
						duration: 0,
						offset: 50
					});

					throw new Error(err);
				})
				.finally(() => {
					this.isEditingProject = false;
					this.editingProjectInfo = {};
				})
		},
		toggleRemoveConfimation() {
			this.removeProjectConfirm = !this.removeProjectConfirm;
		},
		removeProject(project) {
			this.editingProjectInfo = project;
			this.toggleRemoveConfimation();
		},
		confirmRemove() {
			this.toggleRemoveConfimation();
			this.$store.dispatch('projects/setCreating', this.editingProjectInfo.id)
				projectServices
					.removeProject(this.editingProjectInfo.id)
					.then(res => {
						if(res.status === 204) {
							this.$store.dispatch('projects/removeProject', this.editingProjectInfo.id)

							this.$notify({
                            	title: `${this.currentLang.message.success}`,
                            	message: `${this.editingProjectInfo.name} ${this.currentLang.message.removeSuccess}`,
                            	type: 'success',
								duration: 2000,
								offset: 50
							});
						}
					})
					.catch(err => {
						this.$notify.error({
							title: `${this.currentLang.message.error}`,
							message: `${this.editingProjectInfo.name} ${this.currentLang.message.removeFail}`,
							duration: 0,
							offset: 50
						});

						throw new Error(err);
					})
					.finally(() => {
						this.$store.dispatch('projects/setCreating', this.editingProjectInfo.id)
						this.editingProjectInfo = {};
					})
		},
		shareProject(project) {
			this.editingProjectInfo = project;

			this.toggleShareProjectModal();
		},
		toggleShareProjectModal() {
			this.$store.dispatch('projects/toggleShareProjectModal');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';

.project-root {
	display: flex;
	flex-direction: column;
	flex-grow: 2;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 1rem 2.6rem 0px 1.5rem;
	}

	&__wrapper {
		display: flex;
	    min-width: 0;

		overflow-y: scroll;

		flex-wrap: wrap;
		flex-grow: 2;

		padding: 1.5rem;
	}

	&__search {
		width: 18rem;
	}
}

@media (max-width:550px) {
  .project-root__text {
    display: none;
  }
}

.confirm-modal {
    &__warning {
        color: $almost-red;
    }
}

// /deep/ .el-dropdown-menu, .el-popper {
//     background-color: var(--nav__backgroundColor) !important;
// }
</style>