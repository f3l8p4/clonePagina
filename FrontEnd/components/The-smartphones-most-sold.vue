<template>
    <div>
        <Cards-product v-for="product in products" :key="product.id"  :product="product"/>
    </div>
</template>
<script>
export default {
  props: ['products']
}
</script>
