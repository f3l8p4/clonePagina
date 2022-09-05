<template>
    <div>
        <div v-for="item in imgs" :key="item">
            <img class="p-3 my-5" :src="item.src">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [{ src: 'https://images-americanas.b2w.io/spacey/acom/2022/08/15/BRANDING-APP-institucional-3d70411a2e72.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/08/18/Pecas-ame-marcas-BANNER-BRANDING-DESKTOP-8b31d0816f43.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/09/01/BRANDING-DESK-432x540px-fda6d78cd78f.png' }, { src: 'https://images-americanas.b2w.io/spacey/acom/2022/02/04/banner4__a-social-17ebffa971de.webp' }]
    }
  }
}
</script>
