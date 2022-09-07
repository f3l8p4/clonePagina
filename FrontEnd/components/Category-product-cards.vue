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
      imgs: [{ src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_SMARTPHONE-add24a9f6594.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_BELEZA-710af1162583.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_ELETRODOM-f35a5467e26b.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_BRINQUEDOS-3b142839f8fa.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_SMARTV-6b8c344ee378.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_NOTE-8b1e87e50128.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_MOVEIS-795cf9e7197a.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_ELETROPORTATEIS-54f7e30377bb.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/04/04/DESK_ATL_INSTRUMENTOS-019054049ced.png' }]
    }
  }
}
</script>
