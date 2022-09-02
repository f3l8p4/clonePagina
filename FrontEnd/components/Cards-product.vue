<template>
    <div>
        <div class="p-2 flex">
            <div class="cards-products place-items-center">
              <img class="" src="https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812P1.jpg">
              <div class="px-3 py-2">
                <div class="font-bold text-md mb-1">{{products.name}}</div>
                <div class="rating rating-xs">
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />

                    <span class="text-xs ml-3 text-gray-700"> Avaliações </span>
                </div>
                <p class="text-gray-700 text-xs mt-2 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pb-2">
                <span class="text-xs">Preço</span> <br>
                <span class="text-xs mt-1">Parcelas</span>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  props: ['product'],
  mounted () {
    console.log(this.product)
  }
}
</script>
