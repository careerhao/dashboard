<template>
    <div class="project-root">
		<ProjectCard
			:projects="projects"
			@selectProject="selectProject"
		/>
    </div>
</template>

<script>
import ProjectCard from '@/components/project-card/ProjectCard'
export default {
	name: 'ProjectRoot',
    components: {
		ProjectCard,
	},
	data() {
		return {
			projects: [
				{
					id: '00000000-0000-0000-0000-000000000000',
					name: 'Project1',
					description: 'This is project1'
				},
				{
					id: '00000000-0000-0000-0000-000000000001',
					name: 'Project2',
					description: 'Created on 12/08/2021'
				},
				{
					id: '00000000-0000-0000-0000-000000000002',
					name: 'Project3',
					description: ''
				},
				{
					id: '00000000-0000-0000-0000-000000000003',
					name: 'Project4',
					description: 'Project4'
				},
			]
		}
	},
	methods: {
		selectProject(id) {
			this.$router.push({
				path: `/projects/${id}`,
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