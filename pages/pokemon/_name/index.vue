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
import Pokemon from '~/components/Pokemon.vue'

export default {
  components: {
    Pokemon
  },
  validate({ params }) {
    // Must be a number
    return /^\w+$/.test(params.name)
  },
  data() {
    return {
      pokeId: this.$route.params.name
    }
  }
}
</script>
