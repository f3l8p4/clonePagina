<template>
  <div>
    <Cards-product v-for="product in products" :key="product" :product="product"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [
        {
          id: 1,
          nome: 'Cup - 3.5oz, Foam',
          descricao: 'Implemented uniform collaboration',
          preco: '$191.00',
          stars: 4,
          avaliacoes: 4382,
          img_capa: 'http://dummyimage.com/218x100.png/dddddd/000000'
        },
        {
          id: 2,
          nome: 'Chivas Regal - 12 Year Old',
          descricao: 'Persevering secondary toolset',
          preco: '$651.69',
          stars: 2,
          avaliacoes: 4471,
          img_capa: 'http://dummyimage.com/206x100.png/dddddd/000000'
        },
        {
          id: 3,
          nome: 'Beer - Blue',
          descricao: 'Polarised actuating database',
          preco: '$661.19',
          stars: 3,
          avaliacoes: 311,
          img_capa: 'http://dummyimage.com/232x100.png/ff4444/ffffff'
        },
        {
          id: 4,
          nome: 'Greens Mustard',
          descricao: 'Universal dynamic hierarchy',
          preco: '$197.09',
          stars: 5,
          avaliacoes: 4384,
          img_capa: 'http://dummyimage.com/152x100.png/cc0000/ffffff'
        },
        {
          id: 5,
          nome: 'Pear - Asian',
          descricao: 'Down-sized tertiary matrix',
          preco: '$820.76',
          stars: 1,
          avaliacoes: 8597,
          img_capa: 'http://dummyimage.com/194x100.png/ff4444/ffffff'
        },
        {
          id: 6,
          nome: 'Beef - Bones, Cut - Up',
          descricao: 'Progressive directional superstructure',
          preco: '$676.42',
          stars: 5,
          avaliacoes: 7575,
          img_capa: 'http://dummyimage.com/208x100.png/dddddd/000000'
        }
      ]
    }
  }
}
</script>
