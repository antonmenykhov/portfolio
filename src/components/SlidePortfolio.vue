<template>
<div class="slide">
    <div class="slide-text">
        <div class="title title-p">{{item.title}}</div>
        <div class="sub-title sub-title-p">{{item.subtitle}}</div>
        <div class="techs">
            <div v-for="tech,i in item.tech" :key="i" class="tech">
                <img :src="'/logos/'+tech.img+'.png'" :alt="tech.name">
                <p>{{tech.name}}</p>
            </div>
        </div>
        <a target="blank" class="button" :href="item.weblink">Перейти на сайт</a>
    </div>
    <div class="image-wrapper">
        <div class="image">

            <img :src="item.img" alt="">
            <div class="number">0{{number}}</div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    props: {
        item: Object,
        number: Number
    }
}
</script>

<style lang="scss">
.button {
    transform: translateX(-100vw);
    transition: all .4s;
}

.active {

    .button,
    .techs,
    .title,

    .sub-title {
        transform: translateX(0);
    }
   
    .image{
        transform: unset;
    }
}


.techs {
    display: flex;
    margin-top: 20px;
    transform: translateX(-100vw);
    transition: all .4s;
}

.tech {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
}

.tech p {
    margin-top: 5px;
}

.techs img {

    height: 50px;
    width: auto;
}

.title-p {
    font-size: 70px;
    max-width: 30%;
    
}

.sub-title-p {
    font-size: 24px;
    
}

.slide-text {
    z-index: 202;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-left: 11%;
    overflow: hidden;

}

.title {
    color: white;
    max-width: 50vw;
    transform: translateX(-100vw);
    transition: all .4s;
}

.sub-title {
    color: white;
    max-width: 30%;
    transform: translateX(-100vw);
    transition: all .4s;
}

.image-wrapper {
    height: 1250px;
    width: 1250px;
    position: absolute;
    left: 29%;
    display: flex;
    align-items: center;
}

.image {
    height: 650px;
    width: 850px;
    margin: auto;
    position: relative;
    transition: all .4s;
    transform: scale(0.8)translateX(150px)
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: 0 80px 140px -40px rgba(0, 0, 0, 0.6)
}

.number {
    font-family: Abril Fatface;
    font-size: 140px;
    position: absolute;
    right: -63px;
    z-index: 200;
    bottom: 50px;
    text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
}

.image::after {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to top left, #5c1016b9, #040d19a4);
    content: ''
}
@media (max-width: 1600px){
    .image{
        height: 500px;
        width: 700px;
    }

    .image-wrapper{
        width: 70%;
    }
}
@media (max-width: 1024px) {
    .image-wrapper{
        height: 750px;
        width: 750px;
    }
    .image{
        height: 350px;
        width: 500px;
    }
    .number{
        display: none;
    }
    .title-p{
        font-size: 50px;
        line-height: 50px;
    }
    .sub-title-p{
        font-size: 24px;
    }
    .techs img{
        height: 40px;
    }
}
@media (max-width: 768px) {
    .title-p{
        max-width: 100%!important;
        word-wrap: break-word;
    }
    .slide-text{
        justify-content: flex-end;
        height: 100%;
        padding-bottom: 30vh;
    }
    .image-wrapper{
        top: -100px;
        left: calc(-375px + 50vw);
    }
}
@media (max-width: 500px) {
    .image-wrapper{
        top: -150px
    }
    .image{
        width: calc(100vw - 40px);
        height: calc(66vw - 40px);
    }
    .title-p{
        font-size: 30px;
        line-height: unset;
    }
    .slide-text{
        margin-left: 20px;
        margin-right: 20px;
    }
    .sub-title-p{
        font-size: 20px;
    }
}
@media(max-height: 696px){
    .image-wrapper{
        top: -200px;
    }
    
}
</style>