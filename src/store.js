import Vue from 'vue'
import Vuex from 'vuex'

import projects from '@/stores/projects'
import currentProject from '@/stores/currentProject'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    currentProject
  }
})
