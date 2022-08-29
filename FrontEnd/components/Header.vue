<template>
    <div>
        <header class="allHeader">
            <div class="subHeader">
                <ul>
                    <li>
                        <nuxt-link to="/" class="text-yellow-400 text-xl font-bold italic m-7">
                            Americanas
                        </nuxt-link>
                    </li>
                    <li class="Search">
                        <form class="flex w-full items-center">
                            <div class="relative w-full">
                                <input type="text" class="inputSearch">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li class="flex place-items-center font-light ">
                        <svg width="32px"
                            height="32px"
                            viewBox="0 0 35 34"
                            fill="none"><path fill="#fff" fill-opacity="0.01" d="M4.204 4.2H29.83v25.6H4.204z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.017 8.466a4.269 4.269 0 014.272 4.267A4.269 4.269 0 0117.017 17a4.269 4.269 0 01-4.27-4.267 4.269 4.269 0 014.27-4.267zm0 1.6a2.668 2.668 0 00-2.67 2.667 2.668 2.668 0 002.67 2.667 2.668 2.668 0 002.67-2.667 2.668 2.668 0 00-2.67-2.667zm0 8.534c1.478 0 3.53.48 5.175 1.24 2.07.955 3.368 2.246 3.368 3.826 0 1.031-.837 1.867-1.869 1.867H10.344a1.868 1.868 0 01-1.87-1.867c0-1.58 1.3-2.87 3.369-3.826 1.645-.76 3.696-1.24 5.174-1.24zm0 1.6c-1.251 0-3.077.435-4.502 1.093-1.67.77-2.438 1.614-2.438 2.373 0 .148.12.267.267.267H23.69c.148 0 .267-.12.267-.267 0-.76-.77-1.603-2.438-2.373-1.425-.658-3.251-1.093-4.503-1.093z" fill="#fff"></path><ellipse
                            cx="17.017"
                            cy="17"
                            rx="16.017"
                            ry="16"
                            stroke="#fff"
                            stroke-width="2"></ellipse></svg>
                        <span class="text-sm ml-2">
                            Ola faça seu login <br> ou cadastra-se
                        </span>
                    </li>
                    <li class="icon">
                        <svg width="28"
                        height="28"
                        aria-labelledby="headerStoreIcon headerStoreDesc"
                        viewBox="0 0 24 23"
                        fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.637.765c.683 0 1.28.306 1.673.8l2.523 5.602c.112.222.168.444.168.666v3.334c0 .93-.546 1.734-1.334 2.108v7.892a1 1 0 01-2 0V13.5h-6v6.1c0 1.418-1.044 2.567-2.333 2.567H3.667c-1.289 0-2.333-1.15-2.333-2.566v-6.326A2.333 2.333 0 010 11.167V7.833c0-.222.056-.444.166-.666l2.51-5.602a2.162 2.162 0 011.688-.8h15.273zm2.03 10.735c.184 0 .333-.15.333-.333V8.5h-3.5v3h3.167zm-.328-5l-1.682-3.734H4.364c-.012 0-.024 0-.034.002L2.657 6.5h18.682zm-8.338 2h3.5v3H13v-3zm-2 0H7.5v3H11v-3zm-5.5 0H2v2.667c0 .184.149.333.333.333H5.5v-3zm-2.167 5.036h9.333v6.065c0 .352-.194.566-.333.566H3.667c-.14 0-.333-.214-.333-.566v-6.065z" fill="#fff"></path></svg>
                    </li>
                    <li class="icon">
                        <svg width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.23 3.176c-1.921-.193-3.932.57-5.162 1.92L12 5.172l-.068-.076c-1.23-1.35-3.24-2.113-5.163-1.92-2.698.27-4.519 2.287-4.519 5.574 0 2.806 3.092 6.757 9.26 12.068a.75.75 0 00.986-.005c6.169-5.432 9.254-9.374 9.254-12.063 0-3.287-1.821-5.305-4.52-5.574zm-5.235 16.077l-.327-.287C6.385 14.306 3.75 10.839 3.75 8.75c0-2.517 1.238-3.889 3.168-4.082 1.791-.179 3.704.753 4.411 2.167a.75.75 0 001.342 0c.707-1.414 2.62-2.346 4.41-2.167 1.931.193 3.169 1.565 3.169 4.082 0 1.979-2.643 5.45-7.928 10.21l-.327.293z"></path></svg>
                    </li>
                    <li class="icon">
                        <Cart/>
                    </li>
                </ul>
                <div class="flex items-center md:hidden">
                    <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"> &#9776; </button>
                </div>
            </div>
            <sub-itens-header/>
            </header>
            <departament-header/>
    </div>
</template>

<script>
export default {

}
</script>
