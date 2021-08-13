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
					/>
				</div>
				<div>
					<el-button
						plain
						class="project-root__button button-plain--overwrite"
						icon="el-icon-circle-plus-outline"
						@click="toggleCreateProjectModal"
					>
						<span class="project-root__text">Create</span>
					</el-button>
				</div>
			</el-col>
		</el-row>
		<div class="project-root__wrapper">
			<ProjectCard
				:projects="getProjectLists"
				@selectProject="selectProject"
			/>
		</div>

		<ProjectCreate
			@submitForm="createNewProject"
			@toggleCreateProjectModal="toggleCreateProjectModal"
		/>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import ProjectCard from '@/components/project-card/ProjectCard'
import ProjectCreate from '@/components/project-create/ProjectCreate'

const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
// Generate a pseudo-GUID by concatenating random hexadecimal.
const guid = () => (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

export default {
	name: 'ProjectRoot',
    components: {
		ProjectCard,
		ProjectCreate,
	},
	data() {
		return {
			search: '',
			filteredProjecs: [],
		}
	},
	created() {
		this.$store.dispatch('projects/init');
	},
	mounted() {
		this.filteredProjecs = this.getProjectLists;
	},
	computed: {
		...mapState({
			projects: state => state.projects.projectList,
		}),
		...mapGetters('projects', {
			getProjectLists: 'sortProjectListByTimestamp',
		}),
	},
	methods: {
		selectProject(project) {
			this.$router.push({
				path: `/projects/${project.id}`,
			});
			this.$store.dispatch('current_project/selectProject', project)
			this.$store.dispatch('projects/modifyProjectInfo', {
				projectId: project.id,
				data: {
					timestamp: Date.parse(new Date())
				}
			});
		},
		querySearch(queryString, cb) {
        	let filteredProjecs = this.filteredProjecs.map(item => ({
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
	  toggleCreateProjectModal() {
            this.$store.dispatch('projects/toggleCreateProject');
	  },
	  createNewProject(data) {
		  console.log(data)
		  this.$store.dispatch('projects/createProject', {
				id: guid(),
			  	name: data.name,
			  	description: data.description,
				timestamp: Date.parse(new Date())
		  })
		  .then(() => this.toggleCreateProjectModal())
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
</style>