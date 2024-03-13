<template>
  <v-app-bar flat class="app-bar app-bar1" >
    <v-app-bar-title>
      <v-btn  class="Toys-home" rounded="" >tOYS</v-btn>
    </v-app-bar-title>
    <v-btn icon="mdi mdi-magnify" variant="flat" ></v-btn>  
    <v-btn append-icon="mdi-login" variant="outlined" >{{$t('message.login')}}</v-btn>
    <v-btn  variant="outlined" >{{$t('message.signup')}}</v-btn>
  </v-app-bar>

  <v-app-bar flat class="app-bar app-bar2">
    <v-app-bar-title>
      <!-- <v-btn  class="Toys-home">TOYS</v-btn> -->
      
      <v-btn  color="#f49009" to="/" variant="flat" exact rounded="0">{{$t('message.home')}}</v-btn>
    
      <v-btn to="/About" color="#b9c807" variant="flat" rounded="0">{{$t('message.about')}}</v-btn>
      <v-btn to="/products" color="#f35600" variant="flat" rounded="0">{{$t('message.Product')}}</v-btn>
    </v-app-bar-title>
      <v-btn to="/cart" >
        <v-badge floating :content="cart.items.length" color="error">
        <v-icon  size="25px" color="#00b1be" variant="flat">mdi-cart</v-icon>
      </v-badge>
      </v-btn>
      <v-btn @click="changeLocale()" icon="mdi-translate-variant" variant="flat" ></v-btn>  


      <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" variant="flat" color="#000"></v-btn>
  </v-app-bar>

  
  

</template>

<script setup>
import { useCartStore } from '@/store/app';
import { useTheme ,useLocale} from 'vuetify'
import i18n from '@/plugins/i18'
const cart= useCartStore();
const theme = useTheme()
const { current } = useLocale()


function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
function changeLocale () {
  current.value = current.value ==='ar' ? 'en':'ar';
  i18n.global.locale =   i18n.global.locale === 'ar'? 'en' :'ar';
  
}

  
 

  //              
</script>

<style>
.app-bar1 .v-toolbar-title {
  margin-bottom: 24px;
}
.v-toolbar__content > .v-btn{
  margin: 10px;
}
.app-bar2 .v-toolbar-title__placeholder{
  background-color: #EBEAEF;
  border-radius: 15px;
    margin: 0 20px 0 0;
}
.app-bar1 .v-btn.v-btn--density-default:nth-child(1){
  height: 75px;
} 
.v-btn--rounded {
  border-radius: 0 0 24px 24px;
}
.v-btn--active{
  height: 40px !important;
}
.Toys-home{
font-family: "JI Toy Train";
  font-size: 30px !important;
  background-color: #ea2500!important ;
  margin: 0;
  width: 120px;
  height: 120px;
  color: #fff !important;
}
</style>