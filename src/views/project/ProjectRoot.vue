<template>
    <div class="project-root">
		<ProjectCard
			:projects="projects"
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
					name: 'Project1',
					description: 'This is project1'
				},
				{
					name: 'Project2',
					description: 'Created on 12/08/2021'
				},
				{
					name: 'Project3',
					description: ''
				},
				{
					name: 'Project4',
					description: 'Project4'
				},
			]
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