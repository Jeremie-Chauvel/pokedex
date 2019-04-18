<template>
  <div class="Pokemon">
    <h3 class="Name">{{ name }}</h3>
    <nuxt-link :to="'/pokemon/' + name">
      <img class="Image" :src="imgPath" :alt="name + ' picture'" />
    </nuxt-link>
    <div v-if="extend">
      <p class="FirstAbility">First ability: {{ firstAbility }}</p>
      <p class="Weight">Weight: {{ weight }} Kg</p>
    </div>
  </div>
</template>

<script>
const fetch = require('node-fetch')

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
      name: 'Foo',
      imgPath: '/point_interro.jpg',
      firstAbility: 'void',
      weight: '0'
    }
  },
  mounted() {
    this.pokemonAttributs()
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
      this.weight = this.convertHectogrammsToKilograms(pokemon.weight)
    },
    pokemonAttributs() {
      this.getPokemon(this.id).then(myJson => this.setPokemonAttributs(myJson))
    },
    convertHectogrammsToKilograms(hectogramms) {
      return Math.round(Math.round(hectogramms * 10) / 10) / 10
    }
  }
}
</script>

<style>
.Pokemon {
  display: inline-block;
  position: relative;
  /*background-color: #dde0e3; */ /* Light gray */
  padding: 1%;
  margin-left: 1%;
  margin-bottom: 1%;
  border: 1px solid #5d6063;
  border-radius: 5px;
  min-width: 275px;
}
</style>
