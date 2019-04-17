<template>
  <section class="container">
    <div>
      <h1 class="title">Pokedex</h1>
      <h2 class="subtitle">Pokedex display for PokeAPI</h2>
    </div>
  </section>
</template>

<script>
function getPokemon() {
  return fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(response => response.json())
    .catch(e => {
      // eslint-disable-next-line no-console
      console.log(e)
    })
}

getPokemon().then(data => {
  // eslint-disable-next-line no-console
  console.log(data)
})
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
