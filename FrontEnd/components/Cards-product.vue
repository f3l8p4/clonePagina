<template>
    <div>
        <div class="p-2 cursor-pointer">
            <div class="cards-products place-items-center">
              <div class="auto">
                <img :src="product.img_capa">
              </div>
              <div class="px-2 py-2">
                <div class="font-bold text-sm mb-1 ">{{product.nome}}</div>
                <div class="rating rating-xs">
                    <input v-for="star in stars" :key="star" type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"/>
                    <span class="text-xs ml-3 text-gray-700">({{product.avaliacoes}})</span>
                </div>
              </div>
              <div class="px-2 pb-2">
                <span class="text-xs font-extrabold">R${{product.preco}}</span> <br>
                <span class="text-xs mt-1">Parcelas</span>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  props: ['product'],
  data () {
    return {
      stars: this.product.stars
    }
  }
}
</script>
