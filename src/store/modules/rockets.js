const state = {
  rockets: [],
  singleRocket: {}
}

const getters = {
  rockets: state => state.rockets,
  singleRocket: state => state.singleRocket
}

const actions = {
  async fetchRocketsList({ commit }) {
    const response = await fetch('https://api.spacexdata.com/v4/rockets')
      .then(res => res.json())
      .catch(error => `FetchRocketsList: There was an error fetching the data - ${error.message} - `)
    commit('setRockets', response)
  },
  async fetchRocket({ commit }, id) {
    const response = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
      .then(res => res.json())
      .catch(error => `FetchRocket: There was an error fetching the data - ${error.message} - `)
    commit('setSingleRocket', response)
  }
}

const mutations = {
  setRockets: (state, rockets) => (state.rockets = rockets),
  setSingleRocket: (state, rocket) => (state.singleRocket = rocket)
}

export default { state, getters, actions, mutations }
