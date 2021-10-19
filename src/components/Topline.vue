<template>
<div class="top-line">
    <div class="logo">Anton Menukhov</div>
    <div class="icons">
        <div class="socials">
            <a v-for="item in socials" :key="item.icon" :href="item.link"><i :class="item.icon"></i></a>
        </div>
        <div id="menuBtn" @click="togleMenu" class="menu-btn"></div>
    </div>
</div>
<nav id="nav">
    <ul>
        <li v-for="item in menu" :key="item.name">

            <a class="menu-link" href="#">{{item.name}}</a>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                    name: 'Главная',
                    link: ''
                },
                {
                    name: 'Портфолио',
                    link: ''
                },
                {
                    name: 'Обо мне',
                    link: ''
                },
                {
                    name: 'Контакты',
                    link: ''
                },
            ],
            socials: [{
                    icon: 'fab fa-vk',
                    link: '',
                    name: ''
                },
                {
                    icon: 'fab fa-instagram',
                    link: '',
                    name: ''
                },
                {
                    icon: 'fab fa-linkedin-in',
                    link: '',
                    name: ''
                },
            ],
        }
    },
    methods: {
        togleMenu() {
            let menuBtn = document.getElementById('menuBtn');
            menuBtn.classList.toggle('close')
            let nav = document.getElementById('nav');
            nav.classList.toggle('openNav');
            let menuItems = document.getElementsByClassName('menu-link')
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.toggle('openNav')
            }

        }
    },
}
</script>

<style lang="scss">
.top-line {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 250;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
    font-size: 24px;
    letter-spacing: 2.4px;
    cursor: pointer;
    transition: all .2s cubic-bezier(0.23, 1, 0.320, 1);
}

.icons {
    display: flex;
    align-items: center;
}

.socials {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.socials i {
    font-size: 25px;
    color: white;
    margin-right: 20px;
    transition: all .3s cubic-bezier(0.23, 1, 0.320, 1);
}

.socials i:hover,
.logo:hover {
    color: rgba(255, 255, 255, 0.719);
}

.menu-btn {
    width: 40px;
    height: 18px;
    content: '';
    position: relative;
    z-index: 1001;
    cursor: pointer;
}

.menu-btn::before {
    content: '';
    height: 3px;
    background: white;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
 

}

.menu-btn::after {
    content: '';
    height: 3px;
    background: white;
    width: 100%;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    
}

.close::before {
    transform: rotate(-45deg)translateY(10px);
}

.close::after {
    transform: rotate(45deg)translateY(-10px);
}

nav {
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
    z-index: 249;
    transform: translateY(-100vh);
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);

    ul {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {

        list-style: none;
        
        overflow: hidden;
        position: relative;
        padding: 20px
    }

    a {
        will-change: transform;
        transition: transform .4s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: .25s;
        text-transform: uppercase;
        display: block;
        font-size: 100px;
        color: white;
        letter-spacing: 5px;
        font-weight: 600;
        text-shadow: 0 10px 30px rgb(2 11 22 / 20%);
        text-decoration: none;
        transform: translateY(100%);
        position: relative;
    }

    a::after {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0;
        border-bottom: 10px solid white;
        left: 0;
        transition: .3s all cubic-bezier(0.165, 0.84, 0.44, 1);
        transform: scaleX(0);
    }

    a:hover::after {

        transform: scaleX(1);

    }

}

.openNav {
    transform: translateY(0);
}
</style>
