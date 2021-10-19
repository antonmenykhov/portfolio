<template>
<div class="slide">
    <div class="main-text-wrapper">
        <div class="title">Менухов<br>Антон</div>
        <div class="sub-title">веб-разработчик</div>

    </div>
    <div class="moon">
        <div id="moon" :data-relative-input="true" class="moon-wrapper">
            <div data-depth="0.15" class="moon-img"></div>

        </div>
        <div id="cloud-1" :data-relative-input="true" class="cloud-wrapper-1">
            <div data-depth="0.4" class="cloud-img-1"></div>
        </div>
        <div id="cloud-2" :data-relative-input="true" class="cloud-wrapper-2">
            <div data-depth="0.2" class="cloud-img-2"></div>
        </div>
        <div id="cloud-3" :data-relative-input="true" class="cloud-wrapper-3">
            <div data-depth="0.3" class="cloud-img-3"></div>
        </div>
        <div id="cloud-4" :data-relative-input="true" class="cloud-wrapper-4">
            <div  data-depth="0.35" class="cloud-img-4"></div>
        </div>
        <div id="cloud-5" :data-relative-input="true" class="cloud-wrapper-5">
            <div  data-depth="0.15" class="cloud-img-5"></div>
        </div>
        <div id="text" :data-relative-input="true" class="text-wrapper">
            <div data-depth="-0.01" class="text">Портфолио</div>
        </div>
    </div>

</div>
</template>

<script>
import Parallax from 'parallax-js'
export default {
    mounted() {

        new Parallax(document.getElementById('moon')).friction(0.15, 0.15);
        new Parallax(document.getElementById('text')).friction(0.10, 0.10);
        new Parallax(document.getElementById('cloud-1')).friction(0.10, 0.10);
        new Parallax(document.getElementById('cloud-2')).friction(0.10, 0.10);
        new Parallax(document.getElementById('cloud-3')).friction(0.10, 0.10);
        new Parallax(document.getElementById('cloud-4')).friction(0.10, 0.10);
        new Parallax(document.getElementById('cloud-5')).friction(0.10, 0.10);

    },
}
</script>

<style>
.main-text-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 11%;
    font-family: Montserrat, sans-serif;
    
}
.title{
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    font-size: 80px;
    text-transform: uppercase;
}
.sub-title{
    font-family: Montserrat, sans-serif;



    
}
#cloud-1 {
    position: absolute;
    z-index: 201;
    height: fit-content;
    width: fit-content;
    top: 41%;
    left: 670px;

}

.cloud-img-1 {
    width: 480px;
    height: 200px;
    background: url('/img/cloud1.svg') no-repeat center center / contain;
}
#cloud-2 {
    position: absolute;
    z-index: 199;
    height: fit-content;
    width: fit-content;
    top: 28%;
    left: 180px;

}

.cloud-img-2 {
    width: 480px;
    height: 200px;
    background: url('/img/b_cloud02.svg') no-repeat center center / contain;
}
#cloud-3 {
    position: absolute;
    z-index: 201;
    height: fit-content;
    width: fit-content;
    top: 62%;
    left: 570px;

}

.cloud-img-3 {
    width: 480px;
    height: 200px;
    background: url('/img/cloud2.svg') no-repeat center center / contain;
}
#cloud-4 {
    position: absolute;
    z-index: 201;
    height: fit-content;
    width: fit-content;
    top: 55%;
    left: 120px;

}

.cloud-img-4 {
    width: 480px;
    height: 200px;
    background: url('/img/cloud3.svg') no-repeat center center / contain;
}
#cloud-5 {
    position: absolute;
    z-index: 199;
    height: fit-content;
    width: fit-content;
    top: 22%;
    left: 500px;
    

}

.cloud-img-5 {
    transform: rotateZ(180deg)rotateY(180deg);
    width: 480px;
    height: 180px;
    background: url('/img/b_cloud02.svg') no-repeat center center / contain;
}

#text {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 200;

}

.text {
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    color: #ff4d5a;
    margin-left: 300px;
    letter-spacing: 1px;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0 10px 15px rgb(2 11 22 / 20%);
}

.moon {
    position: relative;
}

.moon-wrapper {
    width: 100%;
    height: 100%;

}

.moon-img {

    margin: auto;
    width: 490px;
    height: 100%;
    background: url('/img/moon.svg') no-repeat center center / contain;
}
</style>
