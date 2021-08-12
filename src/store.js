import Vue from 'vue'
import Vuex from 'vuex'

import projects from '@/stores/projects'
import current_project from '@/stores/current_project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects,
    current_project
  }
})
