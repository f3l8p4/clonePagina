<template>
    <div>
        <div id="indicators-carousel" class="relative" data-carousel="static">
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div v-for="item in carouselItems" :key="item.id" class="hidden duration-700 ease-in-out">
                    <img :src="item.url" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border" alt="...">
                </div>
            </div>
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            </div>
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
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
