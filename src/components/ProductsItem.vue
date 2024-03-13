<template>
<v-card>
    <!-- <v-img 
    content
    height="200px"
    :src="product.image">
    <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>

    </v-img> -->
    <v-img 
        :src="`${product.image}`"
            aspect-ratio="1"
        content
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    
    <v-card-title> 
        {{ product.title }}
    </v-card-title>
    <v-card-subtitle>{{ product.descrition }}</v-card-subtitle>
    <v-card-title color="red">{{ product.price }}</v-card-title>
    <v-card-actions>
    <v-btn color="rgb(114 235 49)"
     append-icon="mdi-cart-arrow-down" 
     class="btncart"
      variant="flat"
        @click="addToCart(product)"  >
      {{ $t('message.add') }}
    </v-btn>
    <slot name="action"></slot>
    </v-card-actions>
</v-card>
</template>
<script>
import {useCartStore} from '@/store/app'
import { mapActions } from 'pinia';
export default{
    props:{
        product:{
            type:Object,
            required:true,
        }
    },
    methods:{
        ...mapActions(useCartStore , ['addToCart']),
    }
}



</script>
<style>
.btncart{
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
    font-size: 10px !important;
    font-weight: 900 !important;}


    /* start galary */


</style>