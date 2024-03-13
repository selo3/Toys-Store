<script>
import ProductsList from '@/components/ProductsList.vue';
import OverList from '@/components/OverList.vue';
  export default {
    components:{ProductsList , OverList},
    data () {
      return {
        items: [
          {
            src: './image/6.jpg',
          },
          {
            src: './image/4.jpg',
          },
          {
            src: './image/3.jpg',
          },
          {
            src: './image/2.jpg',
          },
        ],
      }
    },
  }
</script>
  


<template>
  <v-carousel
  cycle
    height="600"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover

    ></v-carousel-item>
  </v-carousel>
  <h1 class="text-h5 my-10 text-center offers" >For the sake of Palestine</h1>
  

  <over-list></over-list>



  <h1 class="text-h3 my-16 text-center our" >{{ $t('message.Products') }}</h1>
  <v-divider class="my-8 mx-auto" color="primary" length="500" :thickness="5"></v-divider>
  <products-list  ></products-list>

  

  <v-container>
    <div class="msg my-10" >
      <img src="https://www.thetoyshop.com/medias/Speech-bubble-1-.png?context=bWFzdGVyfHJvb3R8MzEyNzh8aW1hZ2UvcG5nfGFEUmhMMmcyWkM4NU1UWXlOREF3TURNNE9UUXlMbkJ1Wnd8MmM3NDIzZDZkMTRjMWZjNzVmOWFhNDk3ZmU3MTk2OWNhOGYzN2YzZTVjZWQ3MDBiZGEwZDdmYmU2OTZlMTY1Mw" alt="">
      <img src="https://www.thetoyshop.com/medias/Speech-Bubble-2.png?context=bWFzdGVyfHJvb3R8NTI4NzJ8aW1hZ2UvcG5nfGFEY3lMMmczTlM4NU1UYzVOalUzTkRNM01qRTBMbkJ1Wnd8M2Y5NWFkYWE3ZWRjNzU2OGJjMjFkYjFiYWM4MTAyNjdlNTNlZWJjNjI0YTA1N2I5NGFjMGRhN2UxMDNiZmY5MA" alt="">
    <img src="https://www.thetoyshop.com/medias/Speech-bubble3-1-.png?context=bWFzdGVyfHJvb3R8NDE5NDl8aW1hZ2UvcG5nfGFETmtMMmhrTXk4NU1UWXlNems1TlRnd01Ua3dMbkJ1Wnd8ZTA5MzBhYmY2ZWQxNmY2NDhmNjkwNWZmMmU5MzExZmE5MTVlYmZkYjBjZmFhN2FlNzJkOWMxZTllMDAzM2Q4ZQ" alt="">
    </div>
  

  </v-container>

  
  
      </template>
      <style>
    h1.offers{
      font-size: 40px !important;
      color:#724a4a;
      font-family: "baby blocks" !important;
    }
    h1.our{
      font-family: "JI Toy Train"!important;
      color: chartreusev;
    }
    .msg{
      display: flex;
      justify-content: space-around;
    }
    .msg img{
      width: 20%;
      margin: 20px 0;
    
    }
  
    </style>



