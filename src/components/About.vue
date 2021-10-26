<template>
<div class="slide me-slide">
    <div class="slide-text me-text">
        <div class="title title-p">Обо мне</div>
        <div class="sub-title about-text">
            Привет! Меня зовут Антон, мне 27 и я веб-разработчик. <br>
            Занимаюсь созданием сайтов более двух лет. За это время я работал над более чем 25 коммерческими проектами разной сложности и каждый клиент остался доволен результатом.
            <br>
            <br>
            <b>Знаю, активно использую в работе:</b> HTML, CSS, JS, PHP, Vue.js, Wordpress, Strapi
            <br>
            <br>
            <b>Имею представление, пользовался:</b> React, Python, Docker, Cordova, Dart, 1С-Битрикс, SQL
            <br>
            <br>
            <b>Увлекаюсь:</b> Путешествия, сноуборд, велосипед, работа руками
        </div>
    </div>
    <div  class="image-wrapper">
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

<style lang="scss">
.me {
    height: 490px;
    width: 600px;
    background: url('/img/me.jpg') no-repeat center center / cover;

    margin: auto;
    overflow: hidden;
    
    transition: all .4s;

}


.right-text {
    position: absolute;
    height: 100%;
    width: 50vw;
    left: 40vw;
    display: flex;
    align-items: center;
}

.about-text {
    font-size: 24px;
}

.me-text .sub-title {
    max-width: 550px;
}
@media (max-width: 1600px) {
    .me-slide{
            background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
            background-attachment: fixed;
    }
    .me{
         width: 500px;
        height: 500px;
        border-radius: 50%;
        margin-right: 80px;
    }
}
@media (max-width: 1300px) {
    .me{
       width: 400px;
        height: 400px;
    }
}
@media (max-width: 1200px){
    .me{
        display: none;
    }
}
@media (max-width: 768px){
  
    .me-text{
        margin-left: 0!important;
        padding: 0 20px 30vh;
    }
}
@media (max-width: 500px) {
    .about-text{
        font-size: 16px;
    }
    .me-text{
        padding: 0 20px 200px;
    }
}
@media(max-height: 696px){
    .about-text{
        font-size: 14px;
    }
    
}
</style>
