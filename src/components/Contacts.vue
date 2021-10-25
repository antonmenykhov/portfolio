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
        <a href="https://www.instagram.com/antonmenykhov/" target="blank" class="contact">
            <i class="fab fa-instagram"></i>
            @antonmenykhov
        </a>
        <a href="https://vk.com/menykhov_anton" target="blank" class="contact">

            <i class="fab fa-vk"></i>
            @menykhov_anton
        </a>

    </div>
    <div class="image-wrapper">
        
        <div class="me">
            <img src="/img/me.jpg" alt="Anton Menukhov">
        </div>
    </div>
</div>
</template>

<script>

export default {

}
</script>

<style>
.me{
    height: 490px;
    width: 490px;
    background: url('/img/me.jpg') no-repeat center center / cover;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
    transform: scale(0);
    transition: all .4s;
    
}

.active .me{
    transform: scale(1);
}
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
.active .contact{
  transform: translateX(0);
}
.contact:hover{
    color: rgba(255, 255, 255, 0.562);
}

.contact i {
    width: 27px;
    font-size: 20px;
}
.space{
  margin-top: 30px;
}
</style>
