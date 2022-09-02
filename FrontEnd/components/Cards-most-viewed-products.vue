<template>
    <div>
      <Cards-products v-for="product in products" :key="product.id" :product="products"/>
    </div>
</template>
<script>
export default {
  props: ['products'],
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>
