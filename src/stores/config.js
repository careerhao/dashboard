import language from '@/data/language';

const initialState = () => ({
    langType: 'en', // zh_CN, en
})

const getters = {
    currentLang: state => language[state.langType],
}
    
const mutations = {
    SET_LANGUAGE_TYPE(state, type) {
        state.langType = type;
    },
}

const actions = {
    selectLanguage({ commit }, value) {
        commit('SET_LANGUAGE_TYPE', value);
    },
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}