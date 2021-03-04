<template>
  <div class="fiche-cocktails container d-flex p-5 justify-content-center flex-column">
    <h1 class="text-center mb-5">{{cocktail_details.strDrink}}</h1>
    <div class="d-flex container d-inline m-3 justify-content-center">
        <div class="d-flex d-inline">
          <img class="img-thumbnail w-50 p-5 border-0" :src="cocktail_details.strDrinkThumb"/>
          <div class="d-flex flex-column p-5">
            <h2>Description</h2>
            <p>{{cocktail_details.strInstructions}}</p>
            <p>Use this kind of glass : {{cocktail_details.strGlass}}</p>
            Ingredients :
            <ul>
              <!--AFFICHAGE DES INGREDIENTS AVEC UNE BOUCLE
                  <li v-for="n in 15">
                  <p>{{cocktail_details.strIngredient}}{{n}}</p>
              </li>-->
              <li>{{cocktail_details.strIngredient1}}</li>
              <li>{{cocktail_details.strIngredient2}}</li>
              <li>{{cocktail_details.strIngredient3}}</li>
              <li>{{cocktail_details.strIngredient4}}</li>
              <li>{{cocktail_details.strIngredient5}}</li>
              <li>{{cocktail_details.strIngredient6}}</li>
              <!--<li v-if="!{{cocktail_details.strIngredient7}}">{{cocktail_details.strIngredient7}}</li>-->
            </ul>
          </div>

        </div>

      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'FicheCocktail',
  data(){
    return{
      cocktail_details:[],
      display:false,
      id:this.$route.params.id
    }
  },
  mounted() {
    axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.id)
        .then(res => {
          this.cocktail_details = res.data.drinks[0]
          this.display = true
          console.log(res.data.drinks[0])
        })
        .catch((e) => {
          this.error = "Erreur lors de la récupération des données.";
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
