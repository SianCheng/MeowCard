<script setup>
import FT from '../components/Footer.vue'
// import Discord from 'https://discord.gg/WQunqP6g'
</script>
<template>
    <div class="bg_color">
        <h1 class="textcenter">
            <a href="https://discord.gg/WQunqP6g" target="_blank" rel="noopener">
                <img src="../images/icons_discord.svg" alt="picture">
            </a>
            <a href="https://discord.gg/WQunqP6g" target="_blank" rel="noopener" class="DiscordWord">加入Discord</a>
        </h1>
        <!-- <h1 class="DiscordWord">加入Discord</h1> -->
        <!-- <Discord /> -->
    </div>
    <FT />
</template>
<style>
a {
    /*隱藏超連結底線*/
    text-decoration:none;
}
.DiscordWord {
    width: 100%;
    /* height: 100px; */
    /* outline: 1px solid; */
    text-align: center;
    color:rgb(76, 58, 137);
}
.bg_color{
    display: block;
    width: auto;
    /* background-color: rgb(154, 216, 255); */
}
.textcenter{
    text-align: center;
    margin-top: 300px;
    margin-bottom: 400px;
    font-size: 100px;
}
</style>