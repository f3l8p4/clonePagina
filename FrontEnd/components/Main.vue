<template>
    <div class="w-full">
        <div class="banner">
            <img src="https://images-americanas.b2w.io/spacey/acom/2022/08/26/HEADER-BAIXEOAPP-DESK-fb162355ac3c.png" alt="">
        </div>
        <div class="mb-4">
            <Carousel/>
        </div>
        <div>
            <Cards-subItems/>
        </div>
        <div class="m-3 mt-3">
            <h3 class="text-md font-bold text-gray-400 ml-3 mb-3">Produtos mais vistos na americanas</h3>
            <Cards-most-viewed-products :products="products"/>
        </div>
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
