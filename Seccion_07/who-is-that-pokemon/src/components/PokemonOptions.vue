<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectedPokemon', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      pokemons: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .options-container {
    width: fit-content;
    margin: auto;
    padding: 10px;
  }
  ul {
    list-style-type: none; 
    padding-left: 0; 
    text-align: left; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
  }

  li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    width: 250px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 5px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>