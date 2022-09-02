<template>
    <div>
      <Cards-product @click="goToPage()" v-for="product in products" :key="product.id" :product="products"/>
    </div>
</template>
<script>
export default {
  props: ['products'],
  data () {
    return {

    }
  },
  methods: {
    goToPage () {
      console.log('Go to page')
    }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>
