
   <template>
  <v-card
    class="mx-auto"
    max-width="1200"
  >

    
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title" xl="3" cols="12" sm="6" lg="3" md="3"

        >
          <v-card :color="card.color">
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              contint
            >
              <v-card-title class="text-white"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    
  </v-card>
</template>
  
  <script>
    // Import Swiper Vue.js components
    export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: './pngwing/dog.png', flex: 3 , color:"#24c6cc"},
        { title: 'Favorite road trips', src: './pngwing/maht.png', flex: 3 ,color:"#c5cd4c"},
        { title: 'Best airlines', src: './pngwing/miky.png', flex: 3,color:"#eb8d0b" },
        { title: 'Best airlines', src: './pngwing/Toy-graphy.png', flex: 3, color:"#f35600" }
      ],
    }),
  }
    
  </script>
  <style>
.v-card--variant-elevated{
    padding: 15px !important;
}</style>