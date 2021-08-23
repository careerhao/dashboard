import language from '@/data/language';
import themes from '@/data/themes';

const initialState = () => ({
    langType: 'en', // zh_CN, en
    currentTheme: '',
    theme: {
        appBackgroundColor: null,
        nav: {
          fontFamily: null,
          fontWeight: null,
          color: null,
          textTransform: null,
          backgroundColor: null,
        },
        button: {
          borderRadius: null,
          fontFamily: null,
          fontWeight: null,
          textTransform: null,
          primary: {
            backgroundColor: null,
            hover: null,
            color: null,
          },
          secondary: {
            backgroundColor: null,
            color: null,
          },
        },
        labelColor: null,
        inputText: {
            backgroundColor: null,
            color: null,
          },
      },
})

const getters = {
    currentLang: state => language[state.langType],
    themeVars: ({ theme }) => ({
        
        '--app__backgroundColor': theme.appBackgroundColor,
        // nav style
        '--nav__fontFamily': theme.nav.fontFamily,
        '--nav__fontWeight': theme.nav.fontWeight,
        '--nav__color': theme.nav.color,
        '--nav__textTransform': theme.nav.textTransform,
        '--nav__backgroundColor': theme.nav.backgroundColor,

        // button basic style
        '--btn__borderRadius': theme.button.borderRadius,
        '--btn__fontWeight': theme.button.fontWeight,
        '--btn__fontFamily': theme.button.fontFamily,
        '--btn__textTransform': theme.button.textTransform,

        '--label__color': theme.labelColor,
    
        // primary button style
        '--btn-primary__backgroundColor': theme.button.primary.backgroundColor,
        '--btn-primary__hover': theme.button.primary.hover,
        '--btn-primary__color': theme.button.primary.color,
    
        // secondary button style
        '--btn-secondary__backgroundColor': theme.button.secondary.backgroundColor,
        '--btn-secondary__color': theme.button.secondary.color,
    
        // input style
        '--input-text__backgroundColor': theme.inputText.backgroundColor,
        '--input-text__color': theme.inputText.color,
      }),
}
    
const mutations = {
    SET_LANGUAGE_TYPE(state, type) {
        state.langType = type;
    },
    SET_THEME(state, name) {
        const theme = themes.find(t => t.name === name);
        
        state.theme = theme;
        state.currentTheme = name;
    },
}

const actions = {
    selectLanguage({ commit }, value) {
        commit('SET_LANGUAGE_TYPE', value);
    },
    setTheme({ commit}, name) {
        commit('SET_THEME', name);
    },
}

export default {
    namespaced: true,
    state: initialState,
    mutations,
    getters,
    actions,
}