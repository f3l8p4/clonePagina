<template>
    <div class="mt-3">
        <div class="p1 w-3/4">
          <div v-for="offers in offers_footer" :key="offers" class="border text-xs text-bold cursor-pointer">
            {{offers.offer}}
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      offers_footer: [{ offer: 'creatina' }, { offer: 'Batedeira eletrica' }, { offer: 'black friday' }, { offer: 'sofá retrátil' }, { offer: 'perfume masculino' }, { offer: 'lego' }, { offer: 'smart tv' }, { offer: 'bicicleta ergonometrica' }, { offer: 'galaxy z fold4' }, { offer: 'notebook samsung' }, { offer: 'geladeira brastemp' }, { offer: 'ipad' }]
    }
  }
}
</script>
