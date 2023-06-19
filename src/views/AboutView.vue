<script setup>
import FT from '../components/Footer.vue'
import Navbar from '../components/Navbars.vue'
</script>
<template>
    <nav class="row">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
        <Navbar />
    </nav>
    <div class="child parent">
      <img src="../images/icon/icons8-cat.gif" alt="">
      <h1 >Meow 喵喵喵......</h1>
    </div>
    <FT />
</template>

<style>

.parent {
  text-align: center; 
  width: 100%;
  margin-top: 500px;
  margin-bottom: 500px;
}
.child {
  position: relative;
  top: 50%;  
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
