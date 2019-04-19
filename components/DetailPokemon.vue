<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <img class="Image" src="/arrow_back.png" alt="return arrow" />
      </nuxt-link>
    </div>
    <div>
      <Pokemon :id="pokeId" extend />
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
    pokeId: {
      type: [Number, String],
      default: 1
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
</style>
