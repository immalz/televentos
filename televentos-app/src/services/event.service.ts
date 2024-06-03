import axios from 'axios';
import { Ref, ref } from 'vue';

class EventService {
    private events: any;

    constructor() {
        this.events = [
            {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/06/4-junio.jpg",
            "nombre": "HABLANDO HUEVADAS NUEVA TEMPORADA 04 DE JUNIO",
            "unica_fecha": true,
            "desde_fecha": "04/06/2024, 19:30",
            "moneda": "PEN",
            "entradas_online_desde": "69.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28A745",
            "url_externa": "",
            "slug": "HABLANDO-HUEVADAS-NUEVA-TEMPORADA-04-DE-JUNIO"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/05/IMG_1224.jpeg",
            "nombre": "HABLANDO HUEVADAS NUEVA TEMPORADA 06 DE JUNIO",
            "unica_fecha": true,
            "desde_fecha": "06/06/2024, 19:30",
            "moneda": "PEN",
            "entradas_online_desde": "69.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "HABLANDO-HUEVADAS-NUEVA-TEMPORADA-06-DE-JUNIO"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/02/FEED_FRANCO-ESCAMILLA_2024_AREQUIPA_ENTRADAYA.jpg",
            "nombre": "FRANCO ESCAMILLA SHOW 1995 AREQUIPA",
            "unica_fecha": true,
            "desde_fecha": "26/07/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "37.00",
            "lugar": "Palacio Metropolitano Bellas Artes, Arequipa, Arequipa",
            "lugar_responsive": "Arequipa",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "FRANCO-ESCAMILLA-SHOW-1995-AREQUIPA"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/02/FEED_FRANCO-ESCAMILLA_2024_LIMA_ENTRADAYA.jpg",
            "nombre": "FRANCO ESCAMILLA SHOW 1995 LIMA",
            "unica_fecha": true,
            "desde_fecha": "27/07/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "37.00",
            "lugar": "Multiespacio Costa 21, San Miguel, Lima",
            "lugar_responsive": "San Miguel",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28A745",
            "url_externa": "",
            "slug": "FRANCO-ESCAMILLA-SHOW-1995-LIMA"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/05/los4mejores_1x1.jpg",
            "nombre": "LOS 4 MEJORES",
            "unica_fecha": false,
            "desde_fecha": "05/06/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "40.00",
            "lugar": "C.C Bianca, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "LOS-4-MEJORES"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/05/IMG_1222.png",
            "nombre": "CHAPA TÚ MONEY 05 DE JUNIO",
            "unica_fecha": true,
            "desde_fecha": "05/06/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "49.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "CHAPA-TU-MONEY-05-DE-JUNIO-"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/02/LAS_BANDALAS_ARTE_TICKETERA2.jpg",
            "nombre": "LAS BANDALAS 2 TEMPORADA 2024",
            "unica_fecha": false,
            "desde_fecha": "08/06/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "45.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28A745",
            "url_externa": "",
            "slug": "LAS-BANDALAS-2-TEMPORADA-2024"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/05/12-julio-jairme_1.jpg",
            "nombre": "JAIME FERRARO PREC ARIO",
            "unica_fecha": true,
            "desde_fecha": "12/07/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "80.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "JAIME-FERRARO-PREC-ARIO"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/04/PeruHavanaNights1080x1080_1.jpg",
            "nombre": "HAVANA NIGHTS LLEGA AL PERÚ",
            "unica_fecha": true,
            "desde_fecha": "26/07/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "80.00",
            "lugar": "TEATRO CANOUT, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "HAVANA-NIGHTS-LLEGA-AL-PERU"
        },
        {
            "imagen_home": "https://entradaya.com.pe/media/imagenes_eventos/home/2024/02/Nico_Lima_1080x1080_1.jpg",
            "nombre": "CRONICO",
            "unica_fecha": true,
            "desde_fecha": "16/11/2024, 20:00",
            "moneda": "PEN",
            "entradas_online_desde": "80.00",
            "lugar": "Teatro Canout, Lima, Lima",
            "lugar_responsive": "Lima",
            "activar_boton_personalizado": 0,
            "texto_boton": "",
            "color_boton_personalizado": "#28a745",
            "url_externa": "",
            "slug": "CRONICO"
        }
      ];
    }

    getEvents() {
        return this.events;
    }
}

export default EventService;