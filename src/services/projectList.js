import api from '@/utils/fetch';
import { projectList } from '@/data/projectList'
import log from '@/utils/log';

export default {
    getProjects() {
        // return api.get('projects');
        log.requestSend(`GET project list`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(projectList);
                log.requestReceive('Receive data:', projectList);
            }, 1000);
        });
    },
    getProjectByName(name) {
        // return api.get('projects/name');

        const project = projectList.list.find(pj => pj.name === name);
        log.requestSend(`GET project by name`, name);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(project) {
                    resolve(project)
                    log.requestReceive('Receive data:', project);
                } else {
                    reject('Incorrect project name');
                }
            }, 2000);
        });
    },
    createProject({body, projectId}) {
        // return api.post('/projects');
        log.requestSend(`POST ${JSON.stringify(body)} to endpoint: endpoint_address/project`);

        // Since we cannot hit the real db to get project name,
        // create this in order to check the name to make sure it is unique
        let otherPjName = [];

        projectList.list.filter(pj => {
            if(pj.id !== projectId) {
                otherPjName.push(pj.name.toLowerCase());
            }
        })

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(otherPjName.includes(body.name.toLowerCase())) {
                        reject('project name existed')
                        log.err(`Request for POST got rejected: Project name existed`)
                    } else {
                        resolve({status:204})
                        log.requestReceive(`Response for POST: ${JSON.stringify({status:204})}`)
                    };
                }, 
            2000);
        });
    },
    updateProject({projectId, body}) {
        // return api.put(`projects/${projectId}`)
        log.requestSend(`PUT ${JSON.stringify(body)} to endpoint: endpoint_address/${projectId}`)
        let otherPjName = [];

        projectList.list.filter(pj => {
            if(pj.id !== projectId) {
                otherPjName.push(pj.name.toLowerCase())
            }
        })

        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(otherPjName.includes(body.name.toLowerCase())) {
                    reject('project name existed')
                    log.err(`Request for PUT got rejected: Project name existed`)
                } else {
                    resolve({status:204})
                    log.requestReceive(`Response for PUT: ${JSON.stringify({status:204})}`)
                }
            }, 2000)
        })
    },
    removeProject(projectId) {
        // return api.delete(`projects/${projectId}`)
        log.requestSend(`DELETE project: ${projectId} to endpoint: endpoint_address/${projectId}`)

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({status: 204})
                log.requestReceive('Project deleted with no content')
            }, 2000);
        })
    }
};