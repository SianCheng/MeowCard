<script setup>
import Navbar from '../components/Navbars.vue'
import FT from '../components/Footer.vue'

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
    <Navbar />
    <nav class="row">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
        <div id="app" class="row col-lg-10">
            <!-- <h1 class="StoreWordCenter bg- col-12">
                <img src="../images/Tabletop Role Playing Game.png" alt="" class="StoreWordCenter">
            </h1> -->
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
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG05.png" alt="" class="marginTop20">
                <h3 class="marginTop20">遠古黃銅龍</h3>
                <h2>$180</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
            <div class="col-lg-3 center box">
                <img src="../images/MAG/MAG06.png" alt="" class="marginTop20">
                <h3 class="marginTop20 font_family">巫后塔莎</h3>
                <h2>$600</h2>
                <div class="">
                    <button class="buy_1 commodity" @click="open">購買</button>
                </div>
            </div>
        </div>
    </nav>
    <FT />
</template>
<style scoped>
.font_family {
    font-family: 'Noto Sans TC', sans-serif;
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
    background-color: #d83d3d;
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
}
</style>