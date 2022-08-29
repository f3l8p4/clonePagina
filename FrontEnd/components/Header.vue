<template>
    <div>
        <header class="allHeader">
            <div class="subHeader">
                <nuxt-link to="/" class="text-yellow-400 text-xl font-bold italic">
                    Americanas
                </nuxt-link>
                <ul>
                    <li>
                        <form class="flex items-center">
                            <div class="relative w-full">
                                <input type="text" class="inputSearch">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li class="flex">
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
                        <span>
                            Ola faça seu login <br> ou cadastra-se
                        </span>
                    </li>
                    <li>
                        <Cart/>
                    </li>
                </ul>
                <div class="flex items-center md:hidden">
                    <button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"> &#9776; </button>
                </div>
            </div>
            </header>
    </div>
</template>

<script>
export default {

}
</script>
