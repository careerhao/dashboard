import { get } from '@/utils/fetch';
import { projects } from '@/data/projects'

export default {
  getCurrentProject(projectId) {
    // return get('project');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects.items.find(proj => proj.id === projectId))
        }, 1000)
    })
  },
};