<template>
   <button :class="props.data.icon">
         <!-- <img src="../assets/notificacion.svg" alt="icono de notificacion">
         -->
        <Icon :data="props.data.icon" />
         <span>{{props.data.text}}</span>
   </button>
</template>

<script lang="ts" setup>
    import { ref, Ref, defineProps } from 'vue';
    import Icon from '@/components/Icon.vue';
    const props = defineProps({
        data: {
            type: Object as () => { text: string, icon: string },
            required: true
        }
    });
     
</script>

<style scoped lang="scss">

    button {
        border: 1px solid #000;
        min-width: 110px;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 10px;
        background-color: transparent;

        span {
            width: 100%;
            text-align: center;
        }

        &.movies {
            border: 1px solid $movies;
            span {
                color: $movies;
            }
        }

        &.music {
            border: 1px solid $music;
            span {
                color: $music;
            }
        }

        &.comedy {
            border: 1px solid $comedy;
            span {
                color: $comedy;
            }

            &.active, &:hover {
                background: $comedy;
                color: #fff;

                span { color: #fff;}
            }
        
        }


    }



</style>