<template>
  <v-container>
    <v-row>
      <v-col v-for="(item , index) in items" 
      xl="4"
            cols="12"
            sm="6"
            lg="4"
            md="4"
      :key="item.id">
        <ProductsItem :product="item">
        <template #action>
          <v-btn color="error"
     append-icon="mdi-cart-remove" 
     class="btncart"
      variant="flat"
        @click="remove(index)"  >
          {{ $t('message.remove') }}
      </v-btn>
        </template>
        </ProductsItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >
import ProductsItem from '@/components/ProductsItem.vue';
import { useCartStore } from '@/store/app';
import { mapState , mapActions} from 'pinia';
export default{
  components:{ProductsItem },
  computed:{
    ...mapState(useCartStore , ['items'])
  },
  methods:{
    ...mapActions(useCartStore , ['remove'])
  }
}
  
</script>
