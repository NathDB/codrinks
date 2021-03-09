<template>
  <div class="cocktails">
    <b-card
        v-bind:title="cocktail.strDrink"
        tag="cocktail"
        style="max-width: 20rem;"
        class="mb-2 d-flex"
    >
      <img class="img-thumbnail" :src="cocktail.strDrinkThumb"/>
      <b-button class="primary" variant="outline-primary">
        <!--        Route vers le component FicheCocktail (= cocktail/) avec l'ID en paramètre-->
        <router-link :to="'cocktail/' + cocktail.idDrink">
          Consulter la fiche cocktail
        </router-link>

      </b-button>
      <b-button href="#" class="m-1" :variant="alertvariant" v-on:click="ajouterFavoris(cocktail)"><b-icon-heart></b-icon-heart></b-button>
    </b-card>
  </div>

</template>

<script>
import axios from "axios";
import FicheCocktail from "@/components/FicheCocktail";

export default {
  name: "CocktailDetails",
  components: {FicheCocktail},
  props: {
    cocktail: {},
    nomCocktail: "",
    imageCocktail: "",
    idCocktail:"",
  },
  data(){
    return{
      cocktail_details:[],
      display:false,
      listeFavoris: [],
      alertvariant:"outline-danger",
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
    ajouterFavoris(fav) {
      //ajout du cocktail c à la liste de favoris
      if (!this.listeFavoris.find(x => x === fav)){
        this.listeFavoris.push(fav)
        const parsed = JSON.stringify(this.listeFavoris);
        localStorage.setItem('listeFavoris', parsed);
        this.alertvariant = "danger";
      }

    },
  }
}
</script>

<style scoped>

</style>