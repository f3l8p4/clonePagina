<template>
    <div>
      <Cards-product v-for="product in products" :key="product.id" :product="product"></Cards-product>
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

  },
  mounted () {
    console.log(this.products)
  }
}
</script>
