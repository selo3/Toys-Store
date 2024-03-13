<template>
  <v-app>
    <default-bar />

    <default-view />
    <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
        <h2 class="h2toys">Toys Boys & Girls</h2>

      <v-spacer></v-spacer>

    <div class="img-footer">
      <img src="https://www.thetoyshop.com/medias/Facebook-Logo.png?context=bWFzdGVyfHJvb3R8Njc2NnxpbWFnZS9wbmd8YURJMkwyaGpOeTg1TVRJNU5EUXlPVFkzTlRneUxuQnVad3xmZTAwM2QxZGNiZmQ5ZDI2ODlmZmY0ZWY1OTU1ZmE0MTJiMTNmZjkwYjI1NjM0YjNmMzg0OGEwMmM5ZTEyMzVl">
      
      <img  src="https://www.thetoyshop.com/medias/TIKTOK-social-1-.png?context=bWFzdGVyfHJvb3R8MTMyODZ8aW1hZ2UvcG5nfGFERTBMMmcyT1M4NU1qZzROemd6TVRNME56VXdMbkJ1Wnd8ZjA1YWE1OTkzMjliZmUwMWNlNzIxODAxNTlhYzViY2VkNTY1ZjY4MTBiMTQ0NDZhMTAxMjMzODE1Y2JhYWY2ZQ" >
      <img  src="https://www.thetoyshop.com/medias/Instagram-Logo.png?context=bWFzdGVyfHJvb3R8MTA2NTJ8aW1hZ2UvcG5nfGFHTmtMMmhpWWk4NU1USTVORFF6TURBd016VXdMbkJ1Wnd8YzRlZDhmYjE2NGUxOGRjOTNmMmRiZjUzZWU4ODQxYTljZTcxNGE4NDBkZjI1YmQ1NWEwMWVhZGFkYTUxNjgzMQ" >
      </div>
     
    </div>

    <div class="px-4 py-2  text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Toys</strong>
    </div>
  </v-footer>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
<style>
.img-footer img{
  width: 100px;
  cursor: pointer;
  margin: 60px 30px;
}
.h2toys{
font-family: "JI Toy Train";
  font-size: 50px;
  color: #EE4399;
}
.bg-teal {
    background-color: #131616 !important;
    color: #FFFFFF !important;
}
@media screen and (max-width:1000px) {
  .img-footer img{
  width: 100px;
  cursor: pointer;
  margin: 20px 10px;
}
}
</style>
