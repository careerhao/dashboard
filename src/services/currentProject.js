import { get, put } from '@/utils/fetch';
import { projects } from '@/data/projects'
import log from '@/utils/log';

export default {
  getCurrentProject(projectId) {
    // return get('project');
    log.requestSend(`GET project data by projectId: ${projectId}`)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(projects.items.find(proj => proj.id === projectId))
        }, 1000)
    })
  },
  updateChart({projectId, chartId, body}) {
    // return put(`endpoint_address/projectId/chartId`)
    log.requestSend(`PUT ${JSON.stringify(body)} to endpoint: endpoint_address/${projectId}/${chartId}`)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({status:204})
        log.requestReceive(`Response for PUT: ${JSON.stringify({status:204})}`)
      },1000)
    })
  },
};