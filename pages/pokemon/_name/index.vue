<template>
  <DetailPokemon :poke-id="pokeIdentifier"></DetailPokemon>
</template>

<script>
import DetailPokemon from '../../../components/DetailPokemon.vue'

export default {
  components: {
    DetailPokemon
  },
  validate({ params }) {
    // Must be a number
    return /^\w+$/.test(params.name)
  },
  data() {
    return {
      pokeIdentifier: this.$route.params.name.toLowerCase()
    }
  }
}
</script>
