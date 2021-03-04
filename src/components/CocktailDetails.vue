<template>
  <div class="cocktails">
    <b-card
        v-bind:title="cocktail.strDrink"
        tag="cocktail"
        style="max-width: 20rem;"
        class="mb-2 d-flex"
    >
      <img class="img-thumbnail" :src="cocktail.strDrinkThumb"/>
      <div class="primary">
<!--        Route vers le component FicheCocktail (= cocktail/) avec l'ID en paramètre-->
        <router-link variant="outline-primary" :to="'cocktail/' + cocktail.idDrink">
          Consulter la fiche cocktail
        </router-link>

      </div>
      <b-button href="#" class="m-1" variant="danger" data-toggle="button" v-on:click="ajouterFavoris(cocktail)"><b-icon-heart></b-icon-heart></b-button>
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
    fav:""
  },
  data(){
    return{
      cocktail_details:[],
      display:false,
    }
  },
  methods: {
    // On requête l'API pour aller chercher les détails du cocktail sur lequel on a cliqué (en fct de son id)

    // Amélioration possible : en cours...
    ajouterFavoris(fav) {
      this.$emit("ajouter-favoris", fav)
      console.log(this.listeFavoris);

    },
  }
}
</script>

<style scoped>

</style>