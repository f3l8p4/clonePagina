<template>
    <div>
          <ul class="menu menu-horizontal border w-full flex justify-between">
            <li class="m-3 text-sm"> Informe seu cep</li>
            <li class="m-3 text-sm text-white" v-for="item in trending_topics" :key="item"> {{ item.type }} </li>
          </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      trending_topics: [{ type: 'Baixe o app' }, { type: 'Receba Hoje' }, { type: 'Cartão de crédito ame' }, { type: 'Marcas proprias' }, { type: 'Produtos Internacionais' }, { type: 'Venda na americanas' }, { type: 'Ofertas' }]
    }
  }
}
</script>
