<template>
<div class="home">
    <Topline />
    <div class="vertical-slider">
        <MainSlide />
        <div class="slide">
            цйукацувауы
        </div>
        <div class="slide">
            цйукацувауы2
        </div>
        <div class="slide">
            цйукацувауы3
        </div>
        <div class="slide">
            цйукацувауы4
        </div>
        <div class="slide">
            цйукацувауы5
        </div>

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
</template>

<script>
import Parallax from 'parallax-js'
import Topline from '../components/Topline.vue'
import MainSlide from '../components/MainSlide.vue'
export default {
    name: 'Home',
    data() {
        return {
            
            slides: document.getElementsByClassName('slide'),
            currentSlide: 0,
            oldScrollPosition: 0,

        }
    },
    components: {
        Topline, MainSlide
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
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
            document.body.style.overflow="hidden"
            if (window.pageYOffset > this.oldScrollPosition) {

                this.changeSlide(1)
            } else {

                this.changeSlide(-1)
            }

        },
        changeSlide(slide) {
            let checkForChange = false;
            if ((slide === 1) && this.currentSlide < this.slides.length - 1) {
                this.currentSlide++
                checkForChange = true

            }
            if ((slide === -1) && this.currentSlide > 0) {
                this.currentSlide--
                checkForChange = true

            }
            if (checkForChange) {

                let elemTop = this.slides[this.currentSlide].getBoundingClientRect().y
                window.removeEventListener('scroll', this.handleScroll);
                
                window.scrollBy({
                    top: elemTop,
                    behavior: 'smooth'
                })

                setTimeout(() => {
                    window.addEventListener('scroll', this.handleScroll);
                    this.oldScrollPosition = window.pageYOffset;
                    document.body.style.overflow="auto"
                    
                }, 800)
            }

        },

    },
}
</script>

<style lang="scss">
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

.background {
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    height: 100vh;
    position: fixed;
    width: 100%;
}

.moonlight,
.stars, .moon {
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
</style>
