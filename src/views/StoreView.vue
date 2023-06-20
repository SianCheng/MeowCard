<script setup>
import FT from '../components/Footer.vue'
import Navbar from '../components/Navbars.vue'
// import Adver from '../components/adver.vue'
import Pokemon from '../views/PokemonView.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
    ElMessageBox.confirm(
        '是否確定購買?',
        '商品',
        {
            confirmButtonText: '確定',
            cancelButtonText: '取消',
            type: '商品',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '購買成功',
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消購買',
            })
        })
}


</script>
<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">

    <Navbar />
    <nav class="row MB">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/廣告5.png" class="d-block w-100" alt="圖片不存在">
                </div>
                <div class="carousel-item ">
                    <img src="../images/廣告6.png" class="d-block w-100" alt="圖片不存在">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- <Adver/> -->

        <div id="app" class="row col-lg-10 ">
            <h1 class=" bg- col-12 MTB5">
                <strong>★新商品★</strong>
                <!-- <img src="../images/Tabletop Role Playing Game.png" alt="" class="StoreWordCenter"> -->
            </h1>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard5.png" alt="" class="marginTop20">
                <h3 class="marginTop20">飛翔皮卡丘 VMax</h3>
                <h2>$800</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard2.png" alt="" class="marginTop20">
                <h3 class="marginTop20">皮卡丘 VMax</h3>
                <h2>$620</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard3.png" alt="" class="marginTop20">
                <h3 class="marginTop20">伊布</h3>
                <h2>$140</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard4.png" alt="" class="marginTop20">
                <h3 class="marginTop20">火伊布 VMax</h3>
                <h2>$250</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/Yugioh/YUGI01.png" alt="" class="marginTop20">
                <h3 class="marginTop20">天帝 埃忒耳</h3>
                <h2>$400</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/Yugioh/YUGI02.png" alt="" class="marginTop20">
                <h3 class="marginTop20">黑暗大法師</h3>
                <h2>$450</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/Yugioh/YUGI03.png" alt="" class="marginTop20">
                <h3 class="marginTop20">封印的右手</h3>
                <h2>$950</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/Yugioh/YUGI04.png" alt="" class="marginTop20">
                <h3 class="marginTop20">青眼光龍</h3>
                <h2>$150</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard7.png" alt="" class="marginTop20">
                <h3 class="marginTop20">飛翔皮卡丘 VMax</h3>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard8.png" alt="" class="marginTop20">
                <h3 class="marginTop20">白馬蕾冠王 VMax</h3>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard9.png" alt="" class="marginTop20">
                <h3 class="marginTop20">黑馬蕾冠王 VMax</h3>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/PokemonCard/Pcard10.png" alt="" class="marginTop20">
                <h3 class="marginTop20">連擊武道熊師 VMax</h3>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG01.png" alt="" class="marginTop20">
                <h3 class="marginTop20 font_family">Princess Twilight Sparkle</h3>
                <h2>$1000</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG02.png" alt="" class="marginTop20">
                <h3 class="marginTop20">Princess Luna</h3>
                <h2>$800</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG03.png" alt="" class="marginTop20">
                <h3 class="marginTop20">Nightmare Moon</h3>
                <h2>$950</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG04.png" alt="" class="marginTop20">
                <h3 class="marginTop20">美樹沙耶香</h3>
                <h2>$150</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
        </div>
    </nav>
    <FT />
</template>
<style scoped>
.MTB5 {
    margin-top: 50px;
    margin-bottom: 50px;
}

.MB15 {
    margin-bottom: 150px;
}

h3 {
    font-family: 'Noto Sans TC', sans-serif;
}

.box {
    border: 1px solid black;
    padding: 5px 10px;
}

.marginTop20 {
    margin-top: 20px;
}

.row {
    margin-left: 0px;
    margin-right: 0px;
}

img {
    width: 60%;
}

.commodity {
    margin: 10px 0 10px 0;
    align-items: center;
}

.buy_1 {
    width: 100%;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #ffffff;
    background-color: #3285e5;
    /*transparent*/
    border: 1px solid #000;
    transition: all .3s linear;
}

.buy_1:hover {
    background-color: #ff5555;
    color: #fff;
}

.store {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
}

.MarginTop {
    margin-top: 100px;
    border: 1px;
}

.buttonSize1 {
    display: flexbox;
    margin-top: 10px;
    width: 100%;
    background-color: antiquewhite;
    color: #394867;
    font-weight: bold;
}

.center {
    text-align: center;
    align-items: center;
}

.StoreWordCenter {
    width: 100%;
    height: 800px;
    /* outline: 1px solid; */
    text-align: center;
}

nav {
    font-size: 30px;
}

nav a.router-link-exact-active {
    /* color: var(--color-text); */
    color: #EEEEEE;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem 0 1rem;
    border-left: 0px solid var(--color-border);
    /*1px*/
}

nav a:first-of-type {
    border: 0;
}</style>