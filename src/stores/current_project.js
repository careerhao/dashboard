const initialState = () => ({
    currentProject: {},
})

const getters = {
}

const mutations = {
    SET_CURRENT_PROJECT(state, project) {
        state.currentProject = project;
    },
}

const actions = {
    init({ commit }, projectId) {
        // Get single project by Id from endpoints
    },
    selectProject({ commit}, project) {
        commit('SET_CURRENT_PROJECT', project)
    },
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}