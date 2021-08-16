<template>
    <div class="project-root">
		<el-row>
			<el-col class="project-root__header">
				<div>
					<el-autocomplete
						class="project-root__search"
						v-model="search"
						:fetch-suggestions="querySearch"
						placeholder="Search Project"
						@select="selectProject"
					>
						<i
    						class="el-icon-search el-input__icon"
    						slot="suffix"
    					>
  						</i>
					</el-autocomplete>
				</div>
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
			/>
		</div>

		<project-create
			v-if="isCreateProjectModalOpen"
			@submitForm="createNewProject"
			@toggleCreateProjectModal="toggleCreateProjectModal"
		/>
		<project-update
			v-if="isEditingProjectModalOpen"
			:projectInfo="editingProjectInfo"
			@toggleEditProject="toggleEditProjectModal"
			@submitForm="submitUpdate"
		/>

		<el-dialog
            title="Warning"
            :visible.sync="removeProjectConfirm"
            width="30%"
        >       
                <span>Are you confirm to remove </span>
                <strong><label class="confirm-modal__warning">{{ `${editingProjectInfo.name} ?` }}</label></strong>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary"  @click.native="toggleRemoveConfimation">Cancel</el-button>
                    <el-button class="button-plain--overwrite" @click.native="confirmRemove">Confirm</el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import ProjectCard from '@/components/project-card/ProjectCard';
import ProjectCreate from '@/components/project-create/ProjectCreate';
import ProjectUpdate from '@/components/project-update/ProjectUpdate';
import projectServices from '@/services/projectList';

const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
// Generate a pseudo-GUID by concatenating random hexadecimal.
const guid = () => (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

export default {
	name: 'ProjectRoot',
    components: {
		ProjectCard,
		ProjectCreate,
		ProjectUpdate,
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
			isCreateProjectModalOpen: state => state.projects.createProjectModalOpen,
			isEditingProjectModalOpen: state => state.projects.isEditingProjectModalOpen,
		}),
		...mapGetters('projects', {
			isProjectLoading: 'isProjectLoading',
			getProjectLists: 'sortProjectListByTimestamp',
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
		createProject() {
			this.toggleCreateProjectModal();
		},
	  	toggleCreateProjectModal() {
            this.$store.dispatch('projects/toggleCreateProject');
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
                            title: 'Success',
                            message: `${payload.name} has been created`,
                            type: 'success',
							duration: 2000,
							offset: 50
						});
					}
				})
				.catch(err => {
					this.$notify.error({
          				title: 'Error',
						message: `Create ${payload.name} failed, due to ${err}, please try again.`,
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
                            title: 'Success',
                            message: `${form.name} has been updated`,
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
          				title: 'Error',
						message: `Update ${form.name} failed, due to ${err}, please try again.`,
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
                            	title: 'Success',
                            	message: `${this.editingProjectInfo.name} has been deleted`,
                            	type: 'success',
								duration: 2000,
								offset: 50
							});
						}
					})
					.catch(err => {
						this.$notify.error({
							title: 'Error',
							message: `Delete ${this.editingProjectInfo.name} failed, please try again.`,
							duration: 0,
							offset: 50
						});

						throw new Error(err);
					})
					.finally(() => {
						this.$store.dispatch('projects/setCreating', this.editingProjectInfo.id)
						this.editingProjectInfo = {};
					})
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
</style>