<template>
    <div>
        <ul class="menu menu-horizontal w-full departament-header">
            <li class="departament-buttons mr-3">&#9776;Todos os departamentos</li>
            <li v-for="items in departament" :key="items" class="departament-buttons">{{ items.name }}</li>
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
