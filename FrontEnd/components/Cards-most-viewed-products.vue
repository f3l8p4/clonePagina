<template>
    <div>
      <Cards-products v-for="item in products" :key="item"  :products="products"/>
    </div>
</template>
<script>
export default {
  props: ['products'],
  data () {
    return {

    }
  }
}
</script>
