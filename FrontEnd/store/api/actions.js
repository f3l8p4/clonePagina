export default {
  getProduct ({ commit }) {
    this.$axios.get('produtos').then((res) => {
      commit('STORE', res)
    })
  }
}
