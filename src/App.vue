<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FT from './components/Footer.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-dark">
    <img alt="logo" class="logo" src="./images/icon/icons8-cat.gif" width="30" height="30" />
    <div class="wrapper TextColor AppTextColor">
      <RouterLink to="/" class="AppTextColor">
        <h1 class="CLW">MeowCard</h1>
      </RouterLink>
    </div>
    <nav class="">
      <RouterLink to="/" class="AppTextColor ColorBlue">首頁</RouterLink>
      <RouterLink to="/Store" class="AppTextColor">商店</RouterLink>
      <!-- <RouterLink to="/Role" class="AppTextColor ">角色</RouterLink> -->
      <RouterLink to="/about" class="AppTextColor ">關於</RouterLink>
      <RouterLink to="/Discord" class="AppTextColor">群組</RouterLink>
    </nav>
  </header>
  <!-- 內容 -->
  <RouterView />
  <!-- <FT /> -->
  <!-- <footer>
    <div class="row">
      <div class="col-md-6 col-sm-12 right">
          <h5>Email:ReZeroO13569oxo@gmail.com</h5>
      </div>
      <div class="col-md-6 col-sm-12">
          <h5>© ReZeroO 2022</h5>
      </div>
    </div>

  </footer> -->
</template>

<style scoped>
.ColorBlue{
  color:#132c37;
}
.CLW{
  color: aliceblue;
}
footer{
  height: 300px;
}
header {
  display: flex;
  margin: auto;
  /* place-items: center; */
  /* padding-right: calc(var(--section-gap) / 3); */
  background-color: #132c37;
}
.right{
  text-align: right;
}
.AppTextColor {
  color: #b3b3b3;
  text-decoration:none;
}

.TextCenter {
  color: aquamarine;
  font-size: 30px;
  text-align: center;
}

.TextColor {
  color: #FFFBF5;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 10px 1rem;
}

nav {
  width: 100%;
  font-size: 30px;
  text-align: right;
  margin: auto;
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

footer {
  background-color: #394867;
  padding: 50px;
  text-align: center;
  color: #EEEEEE;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    background-color: #132c37;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 0rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
