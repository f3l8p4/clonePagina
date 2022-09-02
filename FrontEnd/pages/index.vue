<template>
  <div>
    <Main :products="products"></Main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: this.$store.state.api.products.data
    }
  },
  methods: {
    loadProducts () {
      this.$store.dispatch('api/getProducts')
    }
  },
  mounted () {
    this.loadProducts()
  }
}
</script>
