<template>
    <div class="project-root">
		<el-row>
			<el-col class="project-root__header">
				<div>
					<el-autocomplete
						v-model="search"
						:fetch-suggestions="querySearch"
						placeholder="Search Project"
						@select="selectProject"
					/>
				</div>
				<div>
					<el-button plain class="project-root__button" icon="el-icon-circle-plus-outline">
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
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import ProjectCard from '@/components/project-card/ProjectCard'
export default {
	name: 'ProjectRoot',
    components: {
		ProjectCard,
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
			this.$store.dispatch('current_project/selectProject', project)
			this.$store.dispatch('projects/modifyProjectInfo', {
				projectId: project.id,
				data: {
					timestamp: Date.parse(new Date())	
				}
			});
			this.$router.push({
				path: `/projects/${project.id}`,
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
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/modules/_all';

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
}

@media (max-width:550px) {
  .project-root__text {
    display: none;
  }
}
</style>