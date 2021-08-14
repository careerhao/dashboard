import projectServices from '@/services/projectList';

const initialState = () => ({
    projectList: [],
    createProjectModalOpen: false,
})

const getters = {
    sortProjectListByTimestamp: state => state.projectList.sort((a,b) => b.timestamp - a.timestamp)
}

const mutations = {
    SET_PROJECT_LIST(state, projectList) {
        state.projectList = projectList;
    },
    MODIFY_PROJECT_INFO(state, {projectId, data}) {
        const project = state.projectList.find(p => p.id === projectId)
        Object.keys(project).forEach(oldKey => {
            Object.keys(data).forEach(newKey => {
                if(oldKey === newKey) {
                    project[oldKey] = data[newKey]
                }
            })
        })
    },
    TOGGLE_CREATE_PROJECT_MODAL(state) {
        state.createProjectModalOpen = !state.createProjectModalOpen ;
    },
    CREATE_NEW_PROJECT(state, data) {
        state.projectList.push(data);
    }
}

const actions = {
    init({ commit }) {
        projectServices
        .getProjects()
        .then(res => {
            commit('SET_PROJECT_LIST', res.list);
        }, err => {
            console.error(err);    
            throw err;
          })
    },
    modifyProjectInfo({ commit }, {projectId, data}) {
        commit('MODIFY_PROJECT_INFO', {projectId, data});
    },
    toggleCreateProject({ commit }) {
        commit('TOGGLE_CREATE_PROJECT_MODAL');
    },
    createProject({ commit }, data) { 
        commit('CREATE_NEW_PROJECT', data);
    }
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}