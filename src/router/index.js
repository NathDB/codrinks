import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Carte from "@/views/Carte";
import GoogleMap from "@/components/GoogleMap";
import FicheCocktail from "@/components/FicheCocktail";
import CocktailDetails from "@/components/CocktailDetails";
import Recherche from "@/views/Recherche";
import Favoris from "@/views/Favoris";
import Random from "@/views/Random";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/recherche',
    name: 'Recherche',
    //déclarer la vue comme un component
    component: Recherche
  },
  {
    path: '/favoris',
    name: 'Favoris',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Favoris
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/trouver-un-bar',
    name: 'Carte',
    component: GoogleMap
  },
    //Mapping du component et de sa route
    //On passe en paramètre dans la route l'id du cocktail
  {
    path: '/cocktail/:id',
    name: 'FicheCocktail',
    component: FicheCocktail,
  }

]

const router = new VueRouter({
  routes
})

export default router
