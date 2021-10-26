<template>
<div class="slide">
    <div class="slide-text">
        <div class="title">Контакты</div>
        <div class="sub-title">Всегда на связи</div>
        <div class="space"></div>
        <a target="blank" href="mailto:antonmenykhov@gmail.com" class="contact">
            <i class="fas fa-envelope"></i>
            antonmenykhov@gmail.com
        </a>
        <a target="blank" class="contact" href="https://t.me/antonmenykhov">
            <i class="fab fa-telegram-plane"></i>
            @antonmenykhov
        </a>
        <a href="https://vk.com/menykhov_anton" target="blank" class="contact">

            <i class="fab fa-vk"></i>
            @menykhov_anton
        </a>

    </div>
    <div class="image-wrapper">
        <div class="moon"></div>
        <div id="moon2" :data-relative-input="true" class="moon-wrapper">
            <div data-depth="0.15" class="moon-img"></div>

        </div>
    </div>
</div>
</template>

<script>
import Parallax from 'parallax-js'
export default {
    mounted() {

        new Parallax(document.getElementById('moon2')).friction(0.15, 0.15);
    }
}
</script>

<style lang="scss">


.contact {
    display: flex;
    margin: 5px 0;
    text-decoration: none;
    color: white;
    font-size: 20px;
    align-items: center;
    font-family: Montserrat;
    transition: all .4s;
    transform: translateX(-100vw);
}

.active .contact {
    transform: translateX(0);
}

.contact:hover {
    color: rgba(255, 255, 255, 0.562);
}

.contact i {
    width: 27px;
    font-size: 20px;
}

.space {
    margin-top: 30px;
}
@media (max-width: 500px) {
    #moon2{
        display: none;
    }
}
</style>
