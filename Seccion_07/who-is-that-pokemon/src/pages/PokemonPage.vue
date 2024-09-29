<template>
  <div class="main-container">
    <h1 v-if="!pokemon">Espere por favor ...</h1>
    <div v-else>
      <h1>¿Quién es este pokémon?</h1>
      <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" @selected-pokemon="checkAnswer($event)" />
    </div>
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame" class="btn">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
  // Componentes Importados
  import PokemonPicture from "@/components/PokemonPicture";
  import PokemonOptions from "@/components/PokemonOptions";

  // Scripts Importados
  import getPokemonOptions from "@/helpers/getPokemonOptions";

  export default {
    components: {
      PokemonPicture,
      PokemonOptions,
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: "",
      };
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions();
        const rndInt = Math.floor(Math.random() * 4);
        this.pokemon = this.pokemonArr[rndInt];
      },
      checkAnswer(selectedId) {
        this.showPokemon = true;
        this.showAnswer = true;
        if (selectedId == this.pokemon.id) {
          this.message = `Correcto! es ${this.pokemon.name}`;
        } else {
          this.message = `Oops! era ${this.pokemon.name}`;
        }
      },
      newGame() {
        this.pokemon = null;
        this.showPokemon = false;
        this.showAnswer = false;
        this.mixPokemonArray();
      },
    },
    mounted() {
      this.mixPokemonArray();
    },
  };
</script>

<style scoped>
  .main-container h1 {
    padding: 10px;
  }
  .btn {
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px;
  }

  .btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
