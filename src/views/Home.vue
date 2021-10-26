<template>
<div id="boot" class="boot">
    <div class="windows8">
        <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
        </div>
    </div>
</div>
<div class="home">

    <Topline @changeSlideByDot="changeSlideByDot" />
    <div class="vertical-slider">
        <MainSlide />

        <SlidePortfolio v-for="item,i in portfolio" :key="i" :item="item" :number="i+1" />
        <About />
        <Contacts />
    </div>
    <div class="background">
        <div class="moonlight">
            <div id="moonlight" class="moonlight-wrapper" :data-relative-input="true">
                <div data-depth="0.15" class="moonlight-img">
                </div>
            </div>
        </div>
        <div class="stars">
            <div id="stars" :data-relative-input="true" class="stars-wrapper">
                <div data-depth="0.1" class="stars-img"></div>
            </div>
        </div>
    </div>

</div>
<div class="slide-dots">

    <div @click="changeSlideByDot(i)" v-for="item,i in slides" :key="i" class="slide-dot" :class='{active: i==currentSlide}'>

    </div>
</div>
<div @click="changeSlideByDot(currentSlide+1)" class="down" :class="{active: currentSlide == 0}">
</div>
</template>

<script>
import Parallax from 'parallax-js'
import Topline from '../components/Topline.vue'
import MainSlide from '../components/MainSlide.vue'
import SlidePortfolio from '../components/SlidePortfolio.vue'
import Contacts from '../components/Contacts.vue'
import About from '../components/About.vue'
export default {
    name: 'Home',
    data() {
        return {

            currentSlide: 0,
            oldScrollPosition: 0,
            oldSlide: 0,
            slides: null,
            portfolio: [{
                    title: 'Школа рисования CHILDO',
                    subtitle: 'Разработка сайта для онлайн-школы рисования',
                    img: '/img/portfolio/childo.png',
                    weblink: 'https://childo-art.ru',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },
                        {
                            img: 'strapi',
                            name: 'strapi'
                        },
                    ]
                },
                {
                    title: 'Строительная компания Самсон',
                    subtitle: 'Разработка мультиязычного сайта организации',
                    img: '/img/portfolio/samson.png',
                    weblink: 'https://www.samsonrus.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },
                        {
                            img: 'wordpress',
                            name: 'Wordpress'
                        },
                    ]
                },
                {
                    title: 'Рекламная фирма UVprint',
                    subtitle: 'Разработка сайта-каталога услуг',
                    img: '/img/portfolio/uvp.png',
                    weblink: 'http://uvp72.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },
                        {
                            img: 'wordpress',
                            name: 'Wordpress'
                        },
                    ]
                },
                {
                    title: 'Строительная компания СБИК',
                    subtitle: 'Разработка сайта-каталога услуг',
                    img: '/img/portfolio/pmk.png',
                    weblink: 'https://pmk-sbik.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },
                        {
                            img: 'wordpress',
                            name: 'Wordpress'
                        },
                    ]
                },
                {
                    title: 'Мебельная компания Спутник Мебели',
                    subtitle: 'Разработка сайта-каталога продукции',
                    img: '/img/portfolio/spitnik.png',
                    weblink: 'https://sputnik-mebeli.ru/',
                    tech: [{
                            img: 'wordpress',
                            name: 'Wordpress'
                        },

                    ]
                },
                {
                    title: 'Консалтинговая фирма Аудитория 402',
                    subtitle: 'Разработка сайта-визитки c калькулятором',
                    img: '/img/portfolio/a402.png',
                    weblink: 'https://a402.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },

                    ]
                },
                {
                    title: 'Магазин косметики YOLO',
                    subtitle: 'Разработка интернет-магазина',
                    img: '/img/portfolio/yolocosmetics.png',
                    weblink: 'https://yolocosmetics.ru/',
                    tech: [{
                            img: 'wordpress',
                            name: 'Wordpress'
                        },

                    ]
                },
                {
                    title: 'ИТ-компания TOPIT',
                    subtitle: 'Разработка сайта-каталога услуг',
                    img: '/img/portfolio/topit.png',
                    weblink: 'https://top-it72.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },

                    ]
                },
                {
                    title: 'Производственная компания Стальпартнер',
                    subtitle: 'Разработка сайта-визитки',
                    img: '/img/portfolio/stalpartner.png',
                    weblink: 'https://stalpartner72.ru/',
                    tech: [{
                            img: 'vue',
                            name: 'Vue.js'
                        },

                    ]
                },
            ]

        }
    },

    components: {
        Topline,
        MainSlide,
        SlidePortfolio,
        Contacts,
        About
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);

    },

    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {

        document.body.style.overflow = "hidden"
        window.scrollTo(0, 0)
        window.onload = () => {
            document.body.style.overflow = "visible"
            document.getElementById('boot').style.transform = "translateY(-100vh)"
            this.slides[0].classList.add('active')
        }
        this.slides = document.getElementsByClassName('slide');
        let moonlightId = document.getElementById('moonlight');
        let moonlight = new Parallax(moonlightId);
        moonlight.friction(0.15, 0.15);

        let starsId = document.getElementById('stars');
        let stars = new Parallax(starsId);
        stars.friction(0.1, 0.1);

    },
    methods: {
        handleScroll(event) {

            event.preventDefault();
            document.body.style.overflow = "hidden"
            this.oldSlide = this.currentSlide;
            if (window.pageYOffset > this.oldScrollPosition) {
                if (this.currentSlide < this.slides.length - 1) {
                    this.currentSlide++
                }
            } else {
                if (this.currentSlide > 0) {
                    this.currentSlide--
                }

            }
            this.changeSlide(this.currentSlide)

        },
        changeSlideByDot(slide) {
            this.oldSlide = this.currentSlide
            document.body.style.overflow = "hidden"
            this.changeSlide(slide)
        },
        changeSlide(slide) {
            this.currentSlide = slide;
            setTimeout(() => { this.slides[slide].classList.add('active'); }, 500)

            this.slides[this.oldSlide].classList.remove('active');

            let elemTop = this.slides[slide].getBoundingClientRect().y
            window.removeEventListener('scroll', this.handleScroll);

            window.scrollBy({
                top: elemTop,
                behavior: 'smooth'
            })

            setTimeout(() => {
                window.addEventListener('scroll', this.handleScroll);
                this.oldScrollPosition = window.pageYOffset;
                document.body.style.overflow = "visible"

            }, 800)
        }

    },

}
</script>

<style lang="scss">
.boot {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    transition: all .4s;
    background: rgb(17, 16, 41);
    display: flex;
    align-items: center;
    justify-content: center;
}

.down {
    position: fixed;
    left: 40px;
    bottom: 40px;
    background: url('/img/down.svg') no-repeat center center / contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    z-index: 210;
    transform: translateY(100px);
    transition: all .4s;
    opacity: 0;

}

@keyframes bzz {
    10% {
        transform: translateY(2px);
    }

    15% {
        transform: translateY(0px);
    }

    20% {
        transform: translateY(2px);
    }

    25% {
        transform: translateY(0);
    }

}

.active.down {
    opacity: 1;
    transform: translateY(0);
    animation: bzz 2s infinite;
}

.button {
    padding: 15px 50px;
    background: #ff4d5a;
    color: white;
    font-family: Montserrat, sans-serif;
    text-decoration: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;

}

.button:hover {
    background: #ff4d59c4;
}

.slide-dots {
    z-index: 203;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.slide-dot {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 40px;
    transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.slide-dot.active {
    width: 50px;
}

::-webkit-scrollbar {
    width: 0;
}

.vertical-slider {

    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
}

.slide {
    overflow: hidden;
    height: 100vh;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

}

.home {
    position: relative;
}

body {
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
}

.background {
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    height: 100vh;
    position: fixed;
    width: 100%;
}

.moonlight,
.stars,
.moon {
    position: absolute;
    width: 1250px;
    height: 1250px;
    top: 0;
    bottom: 0;
    left: 29%;

    margin: auto;
}

.moonlight-wrapper,
.stars-wrapper {
    width: 100%;
    height: 100%;
}

.moonlight-img {
    margin: auto;
    width: 100%;
    height: 100%;
    background: url('/img/moonlight.svg') no-repeat center center / contain;

}

.stars-img {

    margin: auto;
    width: 100%;
    height: 100%;
    background: url('/img/star.svg') no-repeat center center / contain;
}

@media (max-width: 1600px) {

    .moonlight,
    .stars,
    .moon {

        width: 70vw;
        height: 70vw;
    }
}

@media (max-width: 1024px) {

    .moonlight,
    .stars,
    .moon {
        height: 750px;
        width: 750px;
    }

    .slide-dot {
        margin-bottom: 20px;
        width: 15px;
    }

    .slide-dot.active {
        width: 30px;
    }

    .button {
        font-size: 16px;
        padding: 10px 25px;
    }
}

@media (max-width: 768px) {
    .slide-dots {
        top: unset;
        left: 0;
        right: 0;
        flex-direction: row;
        align-items: flex-end;
    }

    .slide-dot {
        width: 3px;
        height: 15px;
        margin-right: 20px;
    }

    .slide-dot.active {
        width: 3px;
        height: 30px;
    }

    .down {
        bottom: 20px;
        left: unset;
        right: 40px;
    }

    .moonlight,
    .stars,
    .moon {
        bottom: unset;
        left: calc(-375px + 50vw);
        right: unset;
        top: -100px
    }
}

@media (max-width: 500px) {
    .text {
        font-size: 26px;
    }

    #text {
        display: none;
    }

    .moonlight,
    .stars,
    .moon {
        bottom: unset;
        left: calc(-375px + 50vw);
        right: unset;
        top: -150px
    }

    .down {
        display: none;
    }
}

@media(max-height: 696px){
   
    .moonlight,
    .stars,
    .moon{
        top: -200px;
        width: 500px;
        left: calc(50vw - 250px);
    }
}

.windows8 {
    position: relative;
    width: 78px;
    height: 78px;
    margin: auto;
}

.windows8 .wBall {
    position: absolute;
    width: 74px;
    height: 74px;
    opacity: 0;
    transform: rotate(225deg);
    -o-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    -moz-transform: rotate(225deg);
    animation: orbit 4.2325s infinite;
    -o-animation: orbit 4.2325s infinite;
    -ms-animation: orbit 4.2325s infinite;
    -webkit-animation: orbit 4.2325s infinite;
    -moz-animation: orbit 4.2325s infinite;
}

.windows8 .wBall .wInnerBall {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgb(255, 255, 255);
    left: 0px;
    top: 0px;
    border-radius: 10px;
}

.windows8 #wBall_1 {
    animation-delay: 0.926s;
    -o-animation-delay: 0.926s;
    -ms-animation-delay: 0.926s;
    -webkit-animation-delay: 0.926s;
    -moz-animation-delay: 0.926s;
}

.windows8 #wBall_2 {
    animation-delay: 0.183s;
    -o-animation-delay: 0.183s;
    -ms-animation-delay: 0.183s;
    -webkit-animation-delay: 0.183s;
    -moz-animation-delay: 0.183s;
}

.windows8 #wBall_3 {
    animation-delay: 0.3665s;
    -o-animation-delay: 0.3665s;
    -ms-animation-delay: 0.3665s;
    -webkit-animation-delay: 0.3665s;
    -moz-animation-delay: 0.3665s;
}

.windows8 #wBall_4 {
    animation-delay: 0.5495s;
    -o-animation-delay: 0.5495s;
    -ms-animation-delay: 0.5495s;
    -webkit-animation-delay: 0.5495s;
    -moz-animation-delay: 0.5495s;
}

.windows8 #wBall_5 {
    animation-delay: 0.743s;
    -o-animation-delay: 0.743s;
    -ms-animation-delay: 0.743s;
    -webkit-animation-delay: 0.743s;
    -moz-animation-delay: 0.743s;
}

@keyframes orbit {
    0% {
        opacity: 1;
        z-index: 99;
        transform: rotate(180deg);
        animation-timing-function: ease-out;
    }

    7% {
        opacity: 1;
        transform: rotate(300deg);
        animation-timing-function: linear;
        origin: 0%;
    }

    30% {
        opacity: 1;
        transform: rotate(410deg);
        animation-timing-function: ease-in-out;
        origin: 7%;
    }

    39% {
        opacity: 1;
        transform: rotate(645deg);
        animation-timing-function: linear;
        origin: 30%;
    }

    70% {
        opacity: 1;
        transform: rotate(770deg);
        animation-timing-function: ease-out;
        origin: 39%;
    }

    75% {
        opacity: 1;
        transform: rotate(900deg);
        animation-timing-function: ease-out;
        origin: 70%;
    }

    76% {
        opacity: 0;
        transform: rotate(900deg);
    }

    100% {
        opacity: 0;
        transform: rotate(900deg);
    }
}

@-o-keyframes orbit {
    0% {
        opacity: 1;
        z-index: 99;
        -o-transform: rotate(180deg);
        -o-animation-timing-function: ease-out;
    }

    7% {
        opacity: 1;
        -o-transform: rotate(300deg);
        -o-animation-timing-function: linear;
        -o-origin: 0%;
    }

    30% {
        opacity: 1;
        -o-transform: rotate(410deg);
        -o-animation-timing-function: ease-in-out;
        -o-origin: 7%;
    }

    39% {
        opacity: 1;
        -o-transform: rotate(645deg);
        -o-animation-timing-function: linear;
        -o-origin: 30%;
    }

    70% {
        opacity: 1;
        -o-transform: rotate(770deg);
        -o-animation-timing-function: ease-out;
        -o-origin: 39%;
    }

    75% {
        opacity: 1;
        -o-transform: rotate(900deg);
        -o-animation-timing-function: ease-out;
        -o-origin: 70%;
    }

    76% {
        opacity: 0;
        -o-transform: rotate(900deg);
    }

    100% {
        opacity: 0;
        -o-transform: rotate(900deg);
    }
}

@-ms-keyframes orbit {
    0% {
        opacity: 1;
        z-index: 99;
        -ms-transform: rotate(180deg);
        -ms-animation-timing-function: ease-out;
    }

    7% {
        opacity: 1;
        -ms-transform: rotate(300deg);
        -ms-animation-timing-function: linear;
        -ms-origin: 0%;
    }

    30% {
        opacity: 1;
        -ms-transform: rotate(410deg);
        -ms-animation-timing-function: ease-in-out;
        -ms-origin: 7%;
    }

    39% {
        opacity: 1;
        -ms-transform: rotate(645deg);
        -ms-animation-timing-function: linear;
        -ms-origin: 30%;
    }

    70% {
        opacity: 1;
        -ms-transform: rotate(770deg);
        -ms-animation-timing-function: ease-out;
        -ms-origin: 39%;
    }

    75% {
        opacity: 1;
        -ms-transform: rotate(900deg);
        -ms-animation-timing-function: ease-out;
        -ms-origin: 70%;
    }

    76% {
        opacity: 0;
        -ms-transform: rotate(900deg);
    }

    100% {
        opacity: 0;
        -ms-transform: rotate(900deg);
    }
}

@-webkit-keyframes orbit {
    0% {
        opacity: 1;
        z-index: 99;
        -webkit-transform: rotate(180deg);
        -webkit-animation-timing-function: ease-out;
    }

    7% {
        opacity: 1;
        -webkit-transform: rotate(300deg);
        -webkit-animation-timing-function: linear;
        -webkit-origin: 0%;
    }

    30% {
        opacity: 1;
        -webkit-transform: rotate(410deg);
        -webkit-animation-timing-function: ease-in-out;
        -webkit-origin: 7%;
    }

    39% {
        opacity: 1;
        -webkit-transform: rotate(645deg);
        -webkit-animation-timing-function: linear;
        -webkit-origin: 30%;
    }

    70% {
        opacity: 1;
        -webkit-transform: rotate(770deg);
        -webkit-animation-timing-function: ease-out;
        -webkit-origin: 39%;
    }

    75% {
        opacity: 1;
        -webkit-transform: rotate(900deg);
        -webkit-animation-timing-function: ease-out;
        -webkit-origin: 70%;
    }

    76% {
        opacity: 0;
        -webkit-transform: rotate(900deg);
    }

    100% {
        opacity: 0;
        -webkit-transform: rotate(900deg);
    }
}

@-moz-keyframes orbit {
    0% {
        opacity: 1;
        z-index: 99;
        -moz-transform: rotate(180deg);
        -moz-animation-timing-function: ease-out;
    }

    7% {
        opacity: 1;
        -moz-transform: rotate(300deg);
        -moz-animation-timing-function: linear;
        -moz-origin: 0%;
    }

    30% {
        opacity: 1;
        -moz-transform: rotate(410deg);
        -moz-animation-timing-function: ease-in-out;
        -moz-origin: 7%;
    }

    39% {
        opacity: 1;
        -moz-transform: rotate(645deg);
        -moz-animation-timing-function: linear;
        -moz-origin: 30%;
    }

    70% {
        opacity: 1;
        -moz-transform: rotate(770deg);
        -moz-animation-timing-function: ease-out;
        -moz-origin: 39%;
    }

    75% {
        opacity: 1;
        -moz-transform: rotate(900deg);
        -moz-animation-timing-function: ease-out;
        -moz-origin: 70%;
    }

    76% {
        opacity: 0;
        -moz-transform: rotate(900deg);
    }

    100% {
        opacity: 0;
        -moz-transform: rotate(900deg);
    }
}
</style>
