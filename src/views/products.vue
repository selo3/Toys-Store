<template>
   <v-carousel
  cycle
    height="500"
    hide-delimiter-background
    show-arrows="hover"
    width="100%"
    >
    <v-carousel-item
    width="100%"

      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      

    ><video width="100%" autoplay>
  <source :src="item.src" type="video/mp4">
  <source :src="item.src" type="video/ogg">
Your browser does not support the video tag.
</video></v-carousel-item>
  </v-carousel>
  <v-container>
        <v-row>
            <v-col
             v-for="product in products" 
             :key="product.id"
              xl="3"
               cols="12"
                sm="6"
                 lg="3"
                  md="3">
                <products-item :product="product"></products-item> 
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import ProductsItem from '@/components/ProductsItem.vue';
  export default{
    components:{ProductsItem},
    data(){
        return{
            products:[],
            items: [
          {
            src: './image/7.mp4',
          },
          
        ],
        }
    },
    created(){
        fetch('toys.json')
        .then(res => res.json())
        .then(products =>{
            console.log(products);
            this.products = products;

        })
  }}
</script>
