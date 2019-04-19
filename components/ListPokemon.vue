<template>
  <section class="container">
    <div>
      <h1 class="title">Pokedex</h1>
      <h2 class="subtitle">Pokedex display for PokeAPI</h2>
      <Pokemon
        v-for="pokeId in nbOfPokemonsToDisplay"
        :id="pokeId"
        :key="pokeId"
      />
    </div>
  </section>
</template>

<script>
import Pokemon from './Pokemon.vue'

export default {
  components: {
    Pokemon
  },
  props: {
    nbOfPokemonsToDisplay: {
      type: [Number, String],
      default: 15
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
