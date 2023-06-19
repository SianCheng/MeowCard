<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
        aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../images/廣告0.jpg" class="d-block w-100" alt="圖片不存在">
      </div>
      <div class="carousel-item ">
        <img src="../images/廣告1.png" class="d-block w-100" alt="圖片不存在">
      </div>
      <div class="carousel-item">
        <img src="../images/廣告2.png" class="d-block w-100" alt="圖片不存在">
      </div>
      <div class="carousel-item">
        <img src="../images/廣告3.png" class="d-block w-100" alt="圖片不存在">
      </div>
      <div class="carousel-item">
        <img src="../images/廣告4.png" class="d-block w-100" alt="圖片不存在">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <hr/>
  <div class="row">
    <div class="col-md-6">
      <img src="../images/banner01.png" alt="" class="marginAuto">
    </div>
    <div class="col-md-6">
      <img src="../images/banner02.png" alt="" class="marginAuto">
    </div>
  </div>
</template>
<style scoped>
.row {
    margin-left: 0px;
    margin-right: 0px;
}
.marginAuto {
  display:block; 
  margin:auto;
}
</style>