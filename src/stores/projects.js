const initialState = () => ({
    projectList: [
        {
            id: '00000000-0000-0000-0000-000000000000',
            name: 'Project1',
            description: 'This is project1',
            timestamp: '',
        },
        {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'Jroject2',
            description: 'Created on 12/08/2021',
            timestamp: '',
        },
        {
            id: '00000000-0000-0000-0000-000000000002',
            name: 'Prject3',
            description: '',
            timestamp: '',
        },
        {
            id: '00000000-0000-0000-0000-000000000003',
            name: 'Project4',
            description: 'Project4',
            timestamp: '',
        },
    ],
    createProjectModalOpen: false,
})

const getters = {
    sortProjectListByTimestamp: state => state.projectList.sort((a,b) => b.timestamp - a.timestamp)
}

const mutations = {
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
        // Get project list from endpoints
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