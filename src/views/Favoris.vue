<template>
  <div class="favoris container d-flex justify-content-center p-2 flex-column">
    <h1 class="text-center m-5">Mes cocktails favoris</h1>
    <p>A venir...</p>
    <div>
      <b-list-group v-for="(favori, n) in listeFavoris">
        <b-list-group-item class="d-flex justify-content-between">
          <b-avatar variant="info" :src="favori.strDrinkThumb" class="mr-3"></b-avatar>
          <span class="fav">{{ favori.strDrink }}</span>
          <b-button variant="danger" v-on:click="supprimerFavoris(n)">Supprimer</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cocktails from '@/components/Cocktails.vue'
import axios from "axios";

export default {
  name: 'Favoris',
  components: {
    Cocktails
  },
  data(){
    return {
      listeFavoris: [],
    }
  },
  mounted() {
    if (localStorage.getItem('listeFavoris')) {
      try {
        this.listeFavoris = JSON.parse(localStorage.getItem('listeFavoris'));
      } catch(e) {
        localStorage.removeItem('listeFavoris');
      }
    }
  },
  methods: {
    supprimerFavoris(fav) {
      //supprime un cocktail fav de la liste de favoris : fav est l'objet et 1 est le nombre d'objet supprimé
      this.listeFavoris.splice(fav, 1)
      const parsed = JSON.stringify(this.listeFavoris);
      localStorage.setItem('listeFavoris', parsed);
      console.log(this.listeFavoris);
      console.log(localStorage.listeFavoris);
    }

  }
}


</script>
