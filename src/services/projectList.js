import { get } from '@/utils/fetch';
import { projectList } from '@/data/projectList'

export default {
  getProjects() {
    // return get('project');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projectList)
        }, 1000)
    })
  },
};