export default {
  getProducts ({ commit }) {
    this.$axios.get('produtos').then((res) => {
      commit('STORE', res)
    })
  }
}
