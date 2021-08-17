const initialState = () => ({
    currentProject: {},
    isEditChartShow: false
})

const getters = {
    currentProjectId: state => state.currentProject.id,
}
    
const mutations = {
    SET_CURRENT_PROJECT(state, data) {
        state.currentProject = data;
    },
    TOGGLE_EDIT_CHART_SHOW(state) {
        state.isEditChartShow = !state.isEditChartShow;
    }
}

const actions = {
    setCurrentProject({ commit }, project) {
        commit('SET_CURRENT_PROJECT', project);
    },
    toggleEditChartShow({ commit }) {
        commit('TOGGLE_EDIT_CHART_SHOW')
    }
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}