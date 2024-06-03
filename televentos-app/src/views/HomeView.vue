<template>

  <h2>Categoria por evento</h2>

  <div class="categories">
    <Badge :data="item" v-for="(item, index) in badges" :key="index"/>
  </div>


  <div class="home">

    <div class="card" v-for="(item, index) in events" :key="index">
      <Card :item="item" />
    </div>

    <!-- <router-link :to="{name: 'detail', params: {id: 123765}}">Go to About</router-link> -->

  
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref, onMounted } from 'vue';
  import Card from '@/components/Card.vue';
  import EventService from '@/services/event.service';

  import Badge from '@/components/Badge.vue';

  const badges = [
    {
      text: 'Cine',
      icon: 'movies',
    },
    {
      text: 'Musica',
      icon: 'music',
    },
    {
      text: 'Comedia',
      icon: 'comedy',
    },
    // {
    //   text: 'Deportes',
    //   icon: 'sports',
    // },
    // {
    //   text: 'Teatro',
    //   icon: 'theater',
    // },
    // {
    //   text: 'Familia',
    //   icon: 'family',
    // },
    // {
    //   text: 'Festival',
    //   icon: 'festival',
    // },
    // {
    //   text: 'Arte',
    //   icon: 'art',
    // },
    // {
    //   text: 'Moda',
    //   icon: 'fashion',
    // },
    // {
    //   text: 'Tech',
    //   icon: 'technology',
    // },
    // {
    //   text: 'Otros',
    //   icon: 'other',
    // }
  ]

  const service = new EventService();
  const events = service.getEvents();
  // onMounted(async () => {
  //   await service.getEvents();
  // });

  // export default defineComponent({
  //   name: 'HomeView',
  //   components: {
  //     HelloWorld,
  //   },
  // });
</script>

<style lang="scss">
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .categories {
    /* min-width: 100vw; */
    width: 100%;
    height: 80px;
    min-width: 0px;
    min-height: 0px;
    display: flex;
    flex-shrink: unset;
    /* flex: 1; */
    gap: 20px;
    overflow-x: auto;
    margin: 0;
  }

</style>
