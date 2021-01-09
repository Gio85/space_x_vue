const state = {
  capsules: [],
  tableHeaders: []
}

const getters = {
  capsules: state => state.capsules,
  headers: state => state.tableHeaders
}

const actions = {
  async fetchCapsules({ commit }) {
    const response = await fetch('https://api.spacexdata.com/v4/capsules')
      .then(res => res.json())
      .catch(error => `FetchCapsules: There was an error fetching the data - ${error.message} - `)
    commit('setCapsules', response)
    commit('setHeaders', response)
  }
}

const mutations = {
  setCapsules: (state, capsules) => (state.capsules = capsules),
  setHeaders: (state, headers) =>
    (state.tableHeaders = Object.keys(headers[0]).map(header => {
      console.log('header >>> ', header)
      if(header !== 'id') {
        console.log('header >>> ', header)
        return {
          text: header.toUpperCase(),
          value: header
        }
      }
      return {}
    }))
}

export default {
  state,
  mutations,
  actions,
  getters
}
