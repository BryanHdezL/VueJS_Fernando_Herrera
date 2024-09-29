<template>
  <div>
    <div class="pokemon-container">
      <!-- Imagen Obscura -->
      <img v-if="!showPokemon" :src="imgSrc" class="hidden-pokemon" alt="Imagen del Pokemon" />
      <!-- Imagen Real -->
      <img v-else :src="imgSrc" class="fade-in" alt="Imagen del Pokemon" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pokemonId: {
        type: Number,
        requered: true,
      },
      showPokemon: {
        type: Boolean,
        requered: true,
        default: false,
      },
    },
    computed: {
      imgSrc() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      },
    },
  };
</script>

<style scoped>
  .pokemon-container {
    height: 250px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>