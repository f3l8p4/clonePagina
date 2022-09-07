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
        <div class="sections-main">
            <h3 class="sections-description">Produtos mais vistos na americanas</h3>
            <Cards-most-viewed-products class="flex p-4" :products="products"/>
        </div>
        <div class="sections-main">
            <img width="500" loading="lazy" src="https://images-americanas.b2w.io/spacey/acom/2021/12/02/0aa89f4c7f90-MEGAOFERTA-REDFRIDAY-DESK.png" alt="Banner de mega ofertas" class="mt-2 p-3 mb-1">
            <Discount-products class="flex p-3"/>
        </div>
        <div class="mt-1">
            <Category-product-cards/>
        </div>
        <div class="">
            <Banner-main class="flex"/>
        </div>
        <div class="sections-main">
            <h3 class="sections-description">Os telefones mais vendidos</h3>
            <The-smartphones-most-sold  class="flex p-3" :products="products"/>
        </div>
        <div class="sections-main">
            <h3 class="sections-description">Os mais vendidos com desconto</h3>
            <The-best-seller-discount class="flex p-3" :products="products"/>
        </div>
        <div class="sections-main">
            <h3 class="sections-description">os produtos que chegam rapidinho até você</h3>
            <Most-fastest-products class="flex p-3" :products="products"/>
        </div>
        <div class="section-main">
            <h3 class="sections-description">os mais vendidos das nossas lojas</h3>
            <Best-sellers-market class="flex p-3" :products="products"/>
        </div>
    </div>
</template>
<script>
export default {
  props: ['products']
}
</script>
