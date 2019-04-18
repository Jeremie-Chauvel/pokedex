<template>
  <div class="pokemon">
    <h3 class="name">{{ name }}</h3>
    <nuxt-link :to="'/pokemon/' + name">
      <img class="image" :src="imgPath" :alt="name + ' picture'" />
    </nuxt-link>
    <div v-if="extend">
      <p class="first-ability">First ability: {{ firstAbility }}</p>
      <p class="height">Height: {{ height }}</p>
      <p class="weight">Weight: {{ weight }} Kg</p>
      <p>Type:</p>
      <div v-for="type in types" :key="type">
        <div class="pokemon-type">{{ type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from '../assets/utils'

export default {
  props: {
    id: {
      type: [Number, String],
      default: 1
    },
    extend: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      name: '',
      imgPath: '/point_interro.jpg',
      firstAbility: '',
      weight: '',
      height: '',
      types: ['']
    }
  },

  mounted() {
    this.getAndSetPokemonAttributs()
  },
  methods: {
    getPokemon(id) {
      return fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(response => response.json())
        .catch(e => {
          // eslint-disable-next-line no-console
          console.log(e)
        })
    },
    setPokemonAttributs(pokemon) {
      this.name = pokemon.name

      this.imgPath = pokemon.sprites.front_default
      this.firstAbility = pokemon.abilities[0].ability.name
      this.weight = utils.convertHectogrammsToKilograms(pokemon.weight)
      this.height = utils.convertHeightTostr(pokemon.height)
      this.types = this.getPokemonType(pokemon.types)
    },

    getAndSetPokemonAttributs() {
      this.getPokemon(this.id)
        .then(myJson => this.setPokemonAttributs(myJson))
        .catch(e => {
          // eslint-disable-next-line no-console
          console.log(e)
        })
    },
    getPokemonType(typesArray) {
      return typesArray
        .sort(
          (FirstTypeData, SecondTypeData) =>
            FirstTypeData.slot - SecondTypeData.slot
        )
        .map(typeData => typeData.type.name)
    }
  }
}
</script>

<style>
/* class kamel-css */
.pokemon {
  display: inline-block;
  position: relative;
  /*background-color: #dde0e3; */ /* Light gray */
  padding: 1%;
  margin-left: 1%;
  margin-bottom: 1%;
  border: 1px solid #5d6063;
  /* couelrus et marges dans feuille de list-style-position */
  /* pas de pourcenage, soit rem unit soit em */
  /* scss ? */
  border-radius: 5px;
  min-width: 275px;
}
.name {
  text-transform: capitalize;
}
.pokemon-type {
  display: inline-block;
  position: relative;
  border: 1px solid #fc2802;
  border-radius: 3px;
  margin-bottom: 1%;
  min-width: 65px;
  text-transform: capitalize;
}
</style>
