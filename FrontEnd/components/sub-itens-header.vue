<template>
    <div>
          <ul class="menu menu-horizontal">
            <li class="m-3 text-sm" v-for="item in trending_topics" :key="item"> {{ item.type }} </li>
          </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      trending_topics: [{ type: 'Receba Hoje' }, { type: 'Cartão de crédito ame' }, { type: 'Marcas proprias' }, { type: 'Produtos Internacionais' }, { type: 'Venda na americanas' }]
    }
  }
}
</script>
