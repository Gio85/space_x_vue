import Vue from 'vue'
import Vuex from 'vuex'
import companyInfo from '@/store/modules/companyInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    companyInfo
  }
})
