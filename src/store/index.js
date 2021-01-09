import Vue from 'vue'
import Vuex from 'vuex'
import companyInfo from '@/store/modules/companyInfo'
import crew from '@/store/modules/crew'
import rockets from '@/store/modules/rockets'
import capsules from '@/store/modules/capsules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    companyInfo,
    crew,
    rockets,
    capsules
  }
})
