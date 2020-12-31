const state = {
  info: {}
}

const getters = {
  companyInfo: state => state.info
}

const actions = {
  async fetchCompanyInfo({ commit }) {
    const response = await fetch('https://api.spacexdata.com/v4/company')
      .then(res => res.json())
      .catch(error => `FetchCompanyInfo: There was an error fetching the data - ${error.message} - `)
    commit('setCompanyInfo', response)
  }
}

const mutations = {
  setCompanyInfo: (state, info) => (state.info = info)
}

export default {
  state,
  getters,
  actions,
  mutations
}
