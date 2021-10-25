<template>

<Home />
</template>

<script>
import Home from './views/Home.vue'
export default {
  components: { Home },
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

@font-face {
    font-family: "Futura";
    src: url("/fonts/Futura.woff2") format("woff2"),
        url("/fonts/Futura.woff") format("woff"),
        url("/fonts/Futura.ttf") format("ttf");
}

* {
    font-family: Futura, Monteserrat, sans-serif;
    margin: 0;
    padding: 0;
}


</style>
