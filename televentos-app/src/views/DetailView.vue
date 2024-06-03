<template>
   <h1> Detalle del evento {{ eventId }} </h1>
</template>

<script lang="ts" setup>
    import { ref, Ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    let eventId = ref('');

    onMounted(() => {
        console.log('Detalle del evento');
        const route = useRoute();

        eventId.value = route.params.id;

        console.log(route.params.id);
    
    })
    
</script>

<style scoped>

</style>