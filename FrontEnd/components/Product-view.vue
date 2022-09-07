<template>
    <div class="my-3">
        <div class="text-xs mx-3 my-3 breadcrumbs">
            <ul>
              <li>Pagina inicial</li>
              <li>produto</li>
              <li>Visualiçao do produto</li>
            </ul>
          </div>

          <main class="container flex">

            <section class="w-4/5 my-4 bg-white mx-2">
              <div class="flex justify-between">
                <div>
                  <div class="my-3 mx-2 flex">
                    <span class="flex text-xs text-gray-400 cursor-pointer underline">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#888" class="mx-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.23 3.176c-1.921-.193-3.932.57-5.162 1.92L12 5.172l-.068-.076c-1.23-1.35-3.24-2.113-5.163-1.92-2.698.27-4.519 2.287-4.519 5.574 0 2.806 3.092 6.757 9.26 12.068a.75.75 0 00.986-.005c6.169-5.432 9.254-9.374 9.254-12.063 0-3.287-1.821-5.305-4.52-5.574zm-5.235 16.077l-.327-.287C6.385 14.306 3.75 10.839 3.75 8.75c0-2.517 1.238-3.889 3.168-4.082 1.791-.179 3.704.753 4.411 2.167a.75.75 0 001.342 0c.707-1.414 2.62-2.346 4.41-2.167 1.931.193 3.169 1.565 3.169 4.082 0 1.979-2.643 5.45-7.928 10.21l-.327.293z"></path></svg>  Favoritar
                      </span>
                    <span class="flex text-xs text-gray-400 cursor-pointer underline"> <svg viewBox="0 0 19 20" aria-labelledby="shareIcon shareDesc" fill="#888" width="15" height="15" class="mx-3"><path fill="inherit" d="M15 14.12c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L5.04 7.85c-.54-.5-1.25-.81-2.04-.81-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92zm0-12.08c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg> Compartilhar </span>
                  </div>

                  <div>
                    <img  :src="$route.params.img_capa">
                  </div>
                </div>
                <div class="my-3 px-5 ">
                  <h3 class="px-2 text-lg text-gray-500 font-bold"> {{$route.params.nome}} </h3>
                  <nav class="flex text-xs p-2">
                    <div class="rating rating-xs">
                      <input v-for="star in product.stars" :key="star" type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h4 class="mx-2">rate</h4>
                    <span class="mx-2"> 12(Avaliações) </span>
                    <span class="mx-2"> 11 perguntas </span>
                  </nav>
                  <nav class="flex flex-col">
                    <span class="text-sm my-3 mb-5 p-2">
                      {{$route.params.descricao}}
                    </span>
                    <span class="text-xs text-gray-500 cursor-pointer underline mb-7"> Mais informações</span>
                    <span class="text-xs text-gray-500 text-gray-500 cursor-pointer underline">Politica de trocas e devoluções</span>
                  </nav>
                </div>
              </div>
              <div>
                <div class="my-7 mx-5">
                  <img class="border" width="80" :src="$route.params.img_1" alt="">
                </div>
              </div>
            </section>

            <section class="w-2/5 my-4 bg-white flex">
              <div class="mt-4 p-3">
                <nav class="flex flex-col">
                  <span class="text-xl font-extrabold mt-3">R$ {{$route.params.preco}}</span>
                  <span class="text-xs text-gray-500 flex"><svg viewBox="0 0 33 23" fill="#666" xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="mr-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.75 3.781A2.844 2.844 0 0029.906.937H3.094A2.844 2.844 0 00.25 3.781V19.22a2.844 2.844 0 002.844 2.843h26.812a2.844 2.844 0 002.844-2.843V3.78zM2.687 19.22V11.5h27.625v7.719a.406.406 0 01-.406.406H3.094a.406.406 0 01-.407-.406zm0-12.594h27.625V3.781a.406.406 0 00-.406-.406H3.094a.406.406 0 00-.407.406v2.844zm23.97 10.563H21.78a1.219 1.219 0 110-2.438h4.875a1.219 1.219 0 010 2.438z"></path></svg> ate 12x no cartão sem juros</span>
                  <span class="text-xs text-gray-500 underline mt-2 mb-4">Mais formas de pagamento</span>
                </nav>
                <nav class="flex border rounded p-3 ">
                  <svg width="20" height="20" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg" margintop="-1px" class="ame-box__AmeIconUI-sc-46mde0-7 ljegCR"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.215.001h8.236a1.985 1.985 0 011.457.567l1.049 1.034v-.007l1.064 1.053a2.166 2.166 0 01.1 2.982l-.003.003-.003.004-2.502 2.466-.704.693-3.18 3.134a1.99 1.99 0 01-2.791 0l.44-.445-.44.445-3.18-3.134-.703-.692C1.736 6.804.565 5.652.552 5.637l-.003-.004-.003-.003a2.165 2.165 0 01.1-2.982L1.71 1.595v.007L2.759.568A1.983 1.983 0 014.215.001zM1.488 3.575a.914.914 0 00-.012 1.22 2237.875 2237.875 0 013.16 3.11l3.18 3.134-.422.429.422-.429c.141.14.327.21.517.211.19 0 .377-.071.518-.21l.438.444-.438-.445 3.18-3.133.929-.915 2.23-2.196a.915.915 0 00-.011-1.22L13.03 1.459a.733.733 0 00-.546-.208H4.181a.733.733 0 00-.545.208L1.488 3.575z" fill="#ED0059"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58.626C3.58.28 3.86 0 4.204 0h8.256a.626.626 0 01.024 1.252.73.73 0 00-.49.208L9.728 3.694c-.771.76-2.018.76-2.79 0L4.672 1.46a.733.733 0 00-.49-.21.626.626 0 01-.603-.625zm2.66.624l1.575 1.553a.743.743 0 001.036 0m0 0l1.577-1.553H6.239" fill="#ED0059"></path></svg>
                  <span class="text-xs ml-2 text-gray-500">ganhe <span class="font-bold">R$ 2,00</span> de volta na Ame pagando com cartão de crédito</span>
                </nav>
                <nav class="border rounded mt-3 mb-5 p-2">
                  <span class="text-xs text-gray-500 font-bold">Calcular o frete e o prazo</span>
                  <input type="text" class="input input-bordered input-sm" placeholder="Digite seu cep">
                  <button class="btn btn-sm btn-error btn-outline no-animation">Ok</button>
                </nav>
                <nav class="flex flex-col justify-center">
                  <button @click="addCart()" class="btn btn-error btn-wide text-white no-animation">
                    <svg width="25" height="24" viewBox="0 0 25 25" fill="none" class="mx-2"><path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.334 2.5l7.5 6.294h1.833a1 1 0 010 2h-.123l-1.492 11.362c-.14 1.058-1.001 1.971-2.283 1.971H4.901c-1.281 0-2.144-.913-2.283-1.971L1.123 10.794H1a1 1 0 110-2h1.833l7.5-6.294a2 2 0 014 0zm-2 2c.353 0 .684-.091.972-.252l5.417 4.546H5.944l5.418-4.546c.287.16.619.252.972.252zM3.14 10.794h18.386L20.07 21.895c-.018.133-.112.232-.3.232H4.901c-.188 0-.283-.1-.3-.232l-1.46-11.1zm14.86 2a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6zm-2.778-1a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-4.778 1a1 1 0 112 0v6a1 1 0 11-2 0v-6z"
                    fill="#fff"></path></svg>
                    Comprar
                  </button>
                  <span class="text-sm text-gray-500">Este produto é vendido por americanas</span>
                </nav>
              </div>
            </section>
          </main>
    </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        id: this.$route.params.id,
        nome: this.$route.params.nome,
        preco: this.$route.params.preco,
        img_capa: this.$route.params.img_capa,
        avaliacoes: this.$route.params.avaliacoes,
        stars: this.$route.params.stars
      }
    }
  },
  methods: {
    addCart (product) {
      this.$store.commit('cart/addCart', this.product)
      console.log('Produto Adicionado com sucesso')
    }
  }
}
</script>
