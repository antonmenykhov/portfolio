<template>
<div class="slide">
    <div class="main-text-wrapper">
        <div class="title">Менухов<br>Антон</div>
        <div class="sub-title">веб-разработчик</div>

    </div>
    <div class="moon">
        <div class="wrapper">
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
                <div data-depth="0.35" class="cloud-img-4"></div>
            </div>
            <div id="cloud-5" :data-relative-input="true" class="cloud-wrapper-5">
                <div data-depth="0.15" class="cloud-img-5"></div>
            </div>
            <div id="text" :data-relative-input="true" class="text-wrapper">
                <div data-depth="-0.05" class="text">Портфолио</div>
            </div>
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
.active .moon {
    
    transform: translateX(0);
}

.active .wrapper{
    display: block;
}
.wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
    
}
.main-text-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 11%;
    font-family: Montserrat, sans-serif;

}

.title {
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    font-size: 90px;
    text-transform: uppercase;
    position: relative;
}

.title::before {
    position: absolute;
    height: 4px;
    width: 90px;
    border-radius: 2px;
    background: #ff4d5a;

    bottom: -30px;
    content: '';
}

.title::after {
    position: absolute;
    height: 4px;
    width: 90px;
    border-radius: 2px;
    background: #ff4d5a;
    left: 60px;
    bottom: -50px;
    content: '';
}

.sub-title {
    font-family: Montserrat, sans-serif;
    font-size: 30px;
    margin-top: 80px;

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
    z-index: 202;

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
    transform: translateX(100vw);
    transition: all .4s;
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

@media (max-width: 1600px) {
    .moon-img {
        width: 40%;
    }

    .cloud-img-1,
    .cloud-img-2,
    .cloud-img-3,
    .cloud-img-4,
    .cloud-img-5 {
        height: 19vw;
        width: 19vw;
    }

    .text {
        margin-left: 220px;
    }

    #cloud-1 {
        top: 42%;
        left: 55%;
    }

    #cloud-4 {
        top: 46%;
        left: 20%;
    }

    #cloud-3 {
        top: 58%;
        left: 45%;
    }

    #cloud-2 {
        top: 25%;
        left: 19%;
    }

}

@media (max-width: 1366px) {

    .cloud-img-1,
    .cloud-img-2,
    .cloud-img-3,
    .cloud-img-4,
    .cloud-img-5 {
        height: 17vw;
        width: 17vw;
    }

    .text {
        margin-left: 350px;
    }

    #cloud-1 {
        top: 48%;
        left: 55%;
    }

    #cloud-4 {
        top: 46%;
        left: 20%;
    }

    #cloud-3 {
        top: 56%;
        left: 38%;
    }

    #cloud-2 {
        top: 25%;
        left: 19%;
    }

}

@media (max-width: 1100px) {
    .title {
        font-size: 70px;
        line-height: 70px;
    }

    .title::after {
        width: 60px;
        left: 30px;
    }

    .title::before {
        width: 60px;
    }

    .sub-title {
        font-size: 26px;

    }

    .moon-img {
        width: 300px;
    }

    .text {
        font-size: 32px;
        margin-left: 0;
    }

    #text {
        left: 20%;
    }

    #cloud-1 {
        left: 55%;
        top: 40%;
    }

    .cloud-img-1,
    .cloud-img-2,
    .cloud-img-3,
    .cloud-img-4,
    .cloud-img-5 {
        height: 200px;
        width: 200px;
    }

    #cloud-3 {
        left: 42%;
        top: 54%;
    }

    #cloud-4 {
        left: 20%;
        top: 49%
    }

    #cloud-5 {
        left: 50%;
    }

}

@media (max-width: 768px) {
    .main-text-wrapper {
        justify-content: flex-end;
        padding-bottom: 30vh;
    }

    .title {
        font-size: 60px;
        line-height: unset;
    }

    .title::after {
        height: 3px;
        width: 30px;
        bottom: -20px;
        left: 15px;
    }

    .title::before {
        height: 3px;
        width: 30px;
        bottom: -10px;
    }

    .sub-title {
        font-size: 26px;
        max-width: 100% !important;
        margin-top: 35px;
    }

}

@media (max-width: 500px) {
    .title {
        font-size: 40px;
    }

    .sub-title {
        font-size: 22px;
    }
}
@media(max-height: 696px){
   
    .moon-img{
        width: 200px;
    }
    .cloud-img-1,
    .cloud-img-2,
    .cloud-img-3,
    .cloud-img-4,
    .cloud-img-5 {
        height: 130px;
        width: 130px;
    }
    #cloud-1 {
        left: 52%;
        top: 44%;
    }
    #cloud-2 {
        left: 25%;
        top: 29%;
    }
    #cloud-3 {
        left: 40%;
        top: 54%;
    }

    #cloud-4 {
        left: 20%;
        top: 46%
    }

    #cloud-5 {
        top: 32%;
        left: 50%;
    }
}
</style>
