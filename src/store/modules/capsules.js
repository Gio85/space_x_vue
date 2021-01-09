
const state = {
  capsules: [],
  tableHeaders: [],
  errors: []
}

const getters = {
  capsules: state => state.capsules,
  headers: state => state.tableHeaders,
  errors: state => state.errors
}

const actions = {
  async fetchCapsules({ commit }) {
    const response = await fetch('https://api.spacexdata.com/v4/capsules')
      .then(res => res.json())
      .catch(error => commit('setErrors', {
        message: `FetchCapsules: There was an error fetching the data - ${error.message} - `,
        status: error.statusCode
  }))
    commit('setCapsules', response)
    commit('setHeaders', response)
  }
}

const mutations = {
  setCapsules: (state, capsules) => (state.capsules = capsules),
  setHeaders: (state, headers) =>
    (state.tableHeaders = Object.keys(headers[0]).map(header => {
      if (header !== 'id') {
        return {
          text: header.toUpperCase().replace('_', ' '),
          value: header
        }
      }
      return {}
    })),
  setErrors: (state, errorMessage) => state.errors.push(errorMessage)
}

export default {
  state,
  mutations,
  actions,
  getters
}
