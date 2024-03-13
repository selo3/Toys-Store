<template>
    <v-container>
        <v-row>
            <v-col
            v-for="product in products.filter(a => a.id>22)" 
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

import ProductsItem from './ProductsItem.vue';
export default{
    components:{ProductsItem},
    data(){
        return{
            products:[],
        }
    },
    created(){
        fetch('toys.json')
        .then(res => res.json())
        .then(products =>{
            console.log(products);
            this.products = products;

        })
    },
    
}

</script>