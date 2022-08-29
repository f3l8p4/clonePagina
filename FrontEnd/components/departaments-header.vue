<template>
    <div>
        <ul class="menu menu-horizontal">
            <li v-for="items in departament" :key="items"><button>{{ items.name }}</button></li>
          </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      departament: [{ name: 'mercados' }, { name: 'celulares' }, { name: 'eletrodomesticos' }, { name: 'informática' }, { name: 'tv e home theater' }, { name: 'eletroportateis' }, { name: 'moveis' }, { name: 'beleza e perfumaria' }]
    }
  }
}
</script>
