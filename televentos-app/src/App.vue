<template>
  <div class="navbar">
    <Header />
  </div>
  <main>
    <router-view/>
  </main>
  <div class="menu">
    <Menu />
  </div>
  <!-- <nav>
    
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link>
  </nav> 
  <router-view/>
  <Menu />-->
</template>

<script lang="ts" setup>
  import Header from '@/components/Header.vue';
  import Menu from '@/components/Menu.vue';

</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;

    display: flex;
    flex-direction: column;
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px calc(100% - 160px) 80px;

    .navbar {
      width: 100%;
    }

    main {
      height: 100%;
      overflow-y: scroll;
    }

    .menu {
      width: 100%;
      color: white;
      padding: 10px 0;

    }

  }

</style>
