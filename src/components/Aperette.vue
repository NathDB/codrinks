<template>
  <div class="aperette">
    <b-card
        v-bind:title="aperette.nom"
        tag="aperette"
        style="max-width: 20rem;"
        class="mb-2 d-flex"
    >
      <img class="img-thumbnail" :src="aperette.photo"/>
      <b-button variant="primary" v-on:click="toggleRecette(aperette)">Voir recette</b-button>

    </b-card>
    <!--    Modal pour recette aperette-->
    <b-modal ref="my-modal" hide-footer v-bind:title="aperette.nom">
      <div class="d-block">
        <p>Ingrédients nécessaires</p>
        <ul>
          <!--AFFICHAGE DES INGREDIENTS AVEC UNE BOUCLE
              <li v-for="n in 15">
              <p>{{cocktail_details.strIngredient}}{{n}}</p>
          </li>-->
          <li>{{aperette.ingredients}}</li>
          <!--<li v-if="!{{cocktail_details.strIngredient7}}">{{cocktail_details.strIngredient7}}</li>-->
        </ul>
      </div>
      <!--      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>-->
    </b-modal>
  </div>

</template>

<script>
import axios from "axios";
import FicheCocktail from "@/components/FicheCocktail";

export default {
  name: "Aperette",
  components: {FicheCocktail},
  props: {
    aperette:{},
  },
  data(){
    return{
      aperettes:[],
      aperette_details:[],
      display:false,
    }
  },
  mounted() {
    axios
        .get('http://212.47.254.140:8000/aperettes')
        .then(res => {
          this.aperettes = res.data
          this.display = true
          console.log(res.data)
        })
  },
  methods: {
    //Requete sur la table ingredient
    toggleRecette(a) {
      console.log(a)
      let id = a.id;
      console.log(id);
      axios
          .get('http://212.47.254.140:8000/aperettes')
          .then(res => {
            this.aperettes = res.data
            this.display = true
            console.log(c.idDrink)
            console.log(res.data)
          })
      this.$refs['my-modal'].show()
    },
  }
}
</script>

<style scoped>

</style>