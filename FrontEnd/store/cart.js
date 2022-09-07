export const state = () => ({
  cart: []
})

export const getters = {
  cart (state) {
    return state.cart
  },
  cartAmount (state) {
    return state.cart.lenght
  }
}

export const mutations = {
  addCart (state, params) {
    state.cart.push({ ...params })
  }
}

export const actions = {
  load ({ commit }, param) {
    commit('addCart', param)
  }
}
