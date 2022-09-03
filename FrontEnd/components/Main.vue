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
        <div class="m-3 mt-1">
            <h3 class="text-lg font-bold text-gray-400 ml-3 mb-2">Produtos mais vistos na americanas</h3>
            <Cards-most-viewed-products class="flex p-3" :products="products"/>
        </div>
        <div>
            <img width="500" loading="lazy" src="https://images-americanas.b2w.io/spacey/acom/2021/12/02/0aa89f4c7f90-MEGAOFERTA-REDFRIDAY-DESK.png" alt="Banner de mega ofertas" class="mt-2 p-3 mb-1">
            <Discount-products class="flex p-3"/>
        </div>
        <div class="mt-1">
            <Category-product-cards/>
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
