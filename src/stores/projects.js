import { deepClone } from '@/utils';

const initialState = () => ({
    loading: false,
    creatingProject: [],
    projectList: [],
    createProjectModalOpen: false,
    isEditingProjectModalOpen: false,
    editingProject: {},
})

const getters = {
    isProjectLoading: state => state.loading,
    isProjectCreating: state => id => state.creatingProject.includes(id),
    sortProjectListByTimestamp: state => state.projectList.sort((a,b) => b.timestamp - a.timestamp),
}

const mutations = {
    SET_LOADING_VALUE(state, value) {
        state.loading = value;
    },
    SET_CREATING_PROJECT(state, id) {
        state.creatingProject.push(id);
    },
    REMOVE_PROJECT_FROM_CREATING(state, id) {
        const projectId = state.creatingProject.indexOf(id);

        state.creatingProject.splice(projectId,1);
    },
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
        state.createProjectModalOpen = !state.createProjectModalOpen;
    },
    CREATE_NEW_PROJECT(state, data) {
        state.projectList.push(data);
    },
    TOGGLE_EDIT_PROJECT_MODAL(state) {
        state.isEditingProjectModalOpen = !state.isEditingProjectModalOpen;
    },
    SET_EDITING_PROJECT(state, data) {
        state.editingProject = data;
    },
    REMOVE_PROJECT_BY_ID(state, id) {
        const copyList = deepClone(state.projectList);

        state.projectList = copyList.filter(item => item.id !== id);
    }
}

const actions = {
    init({ commit }, list) {
        commit('SET_PROJECT_LIST', list);
    },
    setLoading({ commit }, value) {
        commit('SET_LOADING_VALUE', value);
    },
    setCreating({ commit }, id) {
        commit('SET_CREATING_PROJECT', id);
    },
    finishCreate({ commit}, id) {
        commit('REMOVE_PROJECT_FROM_CREATING', id);
    },
    modifyProjectInfo({ commit }, {projectId, data}) {
        commit('MODIFY_PROJECT_INFO', {projectId, data});
    },
    toggleCreateProject({ commit }) {
        commit('TOGGLE_CREATE_PROJECT_MODAL');
    },
    createProject({ commit }, data) {
        commit('CREATE_NEW_PROJECT', data);
    },
    toggleEditProject({ commit }) {
        commit('TOGGLE_EDIT_PROJECT_MODAL');
    },
    editProject({ commit }, project) {
        commit('SET_EDITING_PROJECT', project);
    },
    removeProject({ commit }, projectId) {
        commit('REMOVE_PROJECT_BY_ID', projectId);
    }
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}