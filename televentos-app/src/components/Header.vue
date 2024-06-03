<template>
    <header>
        <img src="../assets/menu.svg" alt="icono de menu">
        <p>Immalz</p>
        <img src="../assets/notificacion.svg" alt="icono de notificacion">
    </header>
</template>

<script lang="ts" setup>
    import { ref, Ref } from 'vue';
     
</script>

<style scoped>

    header {
        width: 100%;
        height: 100%;
        background-color: #1C58F2;
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        align-items: center;
        color: #fff;
        padding: 0 20px;
    }

</style>