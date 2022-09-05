<template>
    <div>
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
                    <img  src="https://images-americanas.b2w.io/produtos/01/00/img/4806650/1/4806650109_5GG.jpg">
                  </div>
                </div>
                <div class="my-3 px-5 w- border">
                  <h3 class="px-2 text-lg"> Jogo de panelas tramontina </h3>
                  <nav class="flex text-xs p-2">
                    <div class="rating rating-xs">
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h4 class="mr-2">rate</h4>
                    <span class="mr-2"> 12(Avaliações) </span>
                    <span class="mr-2"> 11 perguntas </span>
                  </nav>
                  <nav class="flex flex-col">
                    <span class="text-sm my-3 mb-5 p-2">
                      Descricao
                    </span>
                    <span class="text-xs text-gray-400 underline mb-5"> Mais informações</span>
                    <span class="text-xs text-gray-400 underline">Politica de trocas e devoluções</span>
                  </nav>
                </div>
              </div>
            </section>

            <section class="w-2/5 my-4 bg-white">
              s
            </section>
          </main>
    </div>
</template>
<script>
export default {

}
</script>
