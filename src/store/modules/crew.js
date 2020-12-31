const state = {
  team: [],
  singleMember: {}
}

const getters = {
  team: state => state.team,
  singleMember: state => state.singleMember
}

const actions = {
  async fetchTeamList({ commit }) {
    const response = await fetch('https://api.spacexdata.com/v4/crew')
      .then(res => res.json())
      .catch(error => `FetchTeamList: There was an error fetching the data - ${error.message} - `)
    commit('setTeam', response)
  },
  async fetchSingleMember({ commit, id }) {
    const response = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
      .then(res => res.json())
      .catch(error => `FetchSingleMember: There was an error fetching the data - ${error.message} - `)
    commit('setSingleMember', response)
  }
}

const mutations = {
  setTeam: (state, team) => (state.team = team),
  setSingleMember: (state, member) => (state.singleMember = member)
}

export default {
  state,
  getters,
  mutations,
  actions
}
