<template>
    <div class="card">
        <div class="card__img">
            <img :src="props.item.imagen_home" alt="">
        </div>
        <div class="card__text">
            <p> {{ props.item.nombre }} </p>
        </div>
        <div class="card__buttons">
            <button> Comprar </button>
        </div>
    </div>
 </template>
 
 <script lang="ts" setup>
    interface Event {
        imagen_home: string,
        nombre: string,
        unica_fecha: boolean,
        desde_fecha: string,
        moneda: string,
        entradas_online_desde: string,
        lugar: string,
        lugar_responsive: string,
        activar_boton_personalizado: number,
        texto_boton: any,
        color_boton_personalizado: string,
        url_externa: string,
        slug: string
    }

    import { ref, Ref, defineProps } from 'vue';

    const props = defineProps({
        item: {
            type: Object as () => Event,
            required: true
        }
    })

     
</script>

<style scoped lang="scss">

    .card {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 340px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        position: relative;

        &__img {
            width: 100%;
            aspect-ratio: 1/1;
            overflow: hidden;
            border-radius: 10px 10px 0 0;
            transition: all 0.3s ease-in-out;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                border-radius: 10px 10px 0 0;
                transition: all 0.3s ease-in-out;

            }
        }

        &__text {
            // position: absolute;
            position: relative;
            background-color: rgba($color: #ffffff, $alpha: 0.5);
            color: #000;
            width: 100%;
            height: 40px;
            bottom: 0;
            left: 0;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                margin: 0;
            }
        }

        &__buttons {
            width: 100%;
            height: 300px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: grid;
            place-content: center;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            // display: none;
            button {
                cursor: pointer;
                padding: 10px 20px;
                border-radius: 5px;
                background-color: #000;
                color: #fff;
                border: none;
            }
        }

        &:hover {
            .card__img {
                filter: brightness(0.4);
                img {
                    transform: scale(1.1);          
                }
            }

            .card__buttons {
                opacity: 1;
            }
            


        }
    }
    

</style>