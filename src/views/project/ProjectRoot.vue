<template>
    <div class="project-root">
		<ProjectCard
			:projects="getProjectLists"
			@selectProject="selectProject"
		/>
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
		return {}
	},
	created() {
		this.$store.dispatch('projects/init');
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
		}
	}
}
</script>

<style lang="scss" scoped>
.project-root {
	display: flex;
    min-width: 0;

	overflow-y: scroll;

    flex-wrap: wrap;
  	flex-grow: 2;

  	padding: 1.5rem;
}
</style>