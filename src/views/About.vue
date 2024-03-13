<template>

    
    
    <v-parallax
    src="https://wallpaperaccess.com/full/1804637.jpg" bg-color="#fff"
    >
</v-parallax>
<h1 class="text-h3 my-16 text-center our" >{{ $t('message.about') }}</h1>

<div class="aboutme">
<h1>{{ $t('message.aboutme') }}</h1>
<div class="imgme">
   <a href="https://selo3.github.io/hello-word">
    <img src="/image/Screenshot 2023-12-31 025117.png" alt="">
   </a>
</div>

</div>    
</template>

<script setup>
  
</script>
<style>
.aboutme{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px;
    gap: 60px;

}
.aboutme h1{
    width: 40%;
    background-color: rgba(3, 32, 32, 0.808);
    font-size: 25px;
    border-radius: 10px;
    padding: 20px;

}
.imgme{
    width: 40%;

}
.imgme img{
    width: 100%;
    border: 10px solid green;
    border-radius: 10px;
}

</style>