<template>
  <div class="fiche-cocktails container d-flex p-5 justify-content-center flex-column">
    <h1 class="text-center mb-5">{{cocktail_details.strDrink}}</h1>
    <div class="d-flex flex-column container m-3 justify-content-center">
        <b-img class="img-thumbnail p-5 border-0" fluid-grow :src="cocktail_details.strDrinkThumb"/>
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
      <b-card-group deck class="d-flex justify-content-center m-2 flex-wrap">
        <div v-if="display" v-for="aperette in aperettesListe">
          {{i}}<Aperette :aperette="aperette" />
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Aperette from "@/components/Aperette";

export default {
  name: 'FicheCocktail',
  components: {Aperette},
  data(){
    return{
      cocktail_details:[],
      aperettesListe:[],
      display:false,
      id:this.$route.params.id,
      tableauRandom:[],
      longueur: 28
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
    //requete API pour recup les aperette en fonction de l'alcool du cocktail
    //ici faire la verif alcool aperette = alcool cocktail
    axios

        .get('http://212.47.254.140:8000/aperettes' )
        .then(res => {
          for (let i = 0; i < 3; i++) {
            this.aperettesListe.length = 3
            this.aperettesListe = res.data
            //tri random pour afficher 3 aperettes de façon aléatoire
            this.aperettesListe.sort(function(){return 0.5 - Math.random()})
            this.display = true
            console.log(this.aperettesListe.length)
            this.aperettesListe.includes()
          }
        })
        .catch((e) => {
          this.error = "Erreur lors de la récupération des données.";
        });

  },
  methods: {
    randomize() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
