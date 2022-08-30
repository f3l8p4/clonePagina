<template>
    <div>
        <div class="flex mt-5">
            <img class="p-1 mr-3" width="100" v-for="items in imgs" :key="items.id" :src="items.src">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [{ src: 'https://images-americanas.b2w.io/spacey/acom/2022/06/24/ATALHO-SERVICO-APP1-0009b0590dcb.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/05/27/ATALHO-SERVICO-ENTREGAEM3H-ac32d8fe0255.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/05/27/ATALHO-SERVICO-ENTREGAEM3H-ac32d8fe0255.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/08/25/ATALHO-SERVICO-RIR-DESK-ff7f43347b4b.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/06/03/284979973_1058313325043417_4531104451491540465_n-4419868102f4.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/05/27/ATALHO-SERVICO-OFERTASDATV-0c172c81e899.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/05/27/ATALHO-SERVICO-CUPONERIA-3ce5a8f510ec.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/06/22/ATALHO-LEVEMAIS-7794518dcf59.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/07/20/ATALHO-WHATSAPP-DESK-6024c7bdab03.png' }]
    }
  }
}
</script>
