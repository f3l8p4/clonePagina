<template>
    <div>
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img src="https://images-americanas.b2w.io/spacey/acom/2022/08/26/DESTAQUE-DESK-1bbcfd38f9c5.png" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img src="https://images-americanas.b2w.io/spacey/acom/2022/08/26/VISA-americanas-home-destaque-desktop-1250x313-453a0cb3df51.png" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img src="https://images-americanas.b2w.io/spacey/acom/2022/08/26/destaque-desk-04-fcba6f2b405f.png" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a>
                <a href="#slide4" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img src="https://images-americanas.b2w.io/spacey/acom/2022/08/26/destaque-desk-04-fcba6f2b405f.png" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      carouselItems: [{ id: 1, url: 'https://images-americanas.b2w.io/spacey/acom/2022/08/26/DESTAQUE-DESK-1bbcfd38f9c5.png' }, { id: 2, url: 'https://images-americanas.b2w.io/spacey/acom/2022/08/26/VISA-americanas-home-destaque-desktop-1250x313-453a0cb3df51.png' }, { id: 3, url: 'https://images-americanas.b2w.io/spacey/acom/2022/08/26/destaque-desk-04-fcba6f2b405f.png' }, { id: 4, url: 'https://images-americanas.b2w.io/spacey/acom/2022/08/26/destaque-desk-04-fcba6f2b405f.png' }]
    }
  }
}
</script>
