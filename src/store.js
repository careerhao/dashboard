import Vue from 'vue'
import Vuex from 'vuex'

import projects from '@/stores/projects'
import currentProject from '@/stores/currentProject'
import config from '@/stores/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    currentProject,
    config,
  }
})
