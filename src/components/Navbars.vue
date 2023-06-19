<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="row bg-dark">
        <hr/>
        <div class="col-md-3 center2">
            <RouterLink to="/Pokemon" class="buttonSize1 MarginTop">寶可夢</RouterLink>
        </div>
        <div class="col-md-3">
            <RouterLink to="/WS" class="buttonSize2 MarginTop">Weiβ Schwarz</RouterLink>
        </div>
        <div class="col-md-3">
            <RouterLink to="/Yugioh" class="buttonSize3 MarginTop">遊戲王</RouterLink>
        </div>
        <div class="col-md-3">
            <RouterLink to="/Other" class="buttonSize4 MarginTop">其他</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.row {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 30px;
    padding-bottom: 30px;
}

.buttonSize1 {
    width: 100%;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #ffffff;
    background-color: #62a3cc;
    text-decoration: none;
    border: 1px solid #000;
    transition: all .3s linear;
    box-shadow: 0 0 3px 3px #ffffff; 
    border-radius:3cm;
}

.buttonSize1:hover {
    background-color: #525FE1;
    color: #fff;
}

.buttonSize2 {
    width: 100%;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #ffffff;
    background-color: #40c7a8;
    text-decoration: none;
    border: 1px solid #000;
    transition: all .3s linear;
    box-shadow: 0 0 3px 3px #ffffff; 
    border-radius:3cm;
}

.buttonSize2:hover {
    color: #000;
    background-color: #FAF0E4;
}

.buttonSize3 {
    width: 100%;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #ffffff;
    background-color: #cc9b62;
    text-decoration: none;
    border: 1px solid #000;
    transition: all .3s linear;
    box-shadow: 0 0 3px 3px #ffffff; 
    border-radius:3cm;
}

.buttonSize3:hover {
    background-color: #FFA41B;
    color: #fff;
}

.buttonSize4 {
    width: 100%;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #ffffff;
    background-color: #656565;
    text-decoration: none;
    border: 1px solid #000;
    transition: all .3s linear;
    box-shadow: 0 0 3px 3px #ffffff; 
    border-radius:3cm;
}

.buttonSize4:hover {
    background-color: #E966A0;
    color: #fff;
}

.MarginTop {
    /* margin-top: 100px; */
    border: 1px;
}
</style>