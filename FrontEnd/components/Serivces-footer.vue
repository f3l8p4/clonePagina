<template>
    <div>
        <div class="bg-white pt-1.5 pb-1.5">
          <ul class="flex">
            <li v-for="item in services" :key="item" class="text-bold text-gray-700 m-2 hover:underline text-sm cursor-pointer">{{ item.link }}</li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      services: [{ link: 'Atendimento 4003-4808' }, { link: 'Canal de vendas' }, { link: 'ame digital' }, { link: 'cartão de crédito ame' }, { link: 'guia de segurança' }, { link: 'Americanas empresas' }, { link: 'Americanas advertising' }, { link: 'entregas e devoluções' }]
    }
  }
}
</script>
