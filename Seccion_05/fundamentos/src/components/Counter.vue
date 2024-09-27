<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
  export default {
    // Propiedades
    props: {
      title: {
        type: String,
      },
      start: {
        type: Number,
        default: 100,
        validator(value) {
          return value > 0;
        },
      },
    },
    // Datos
    data() {
      return {
        counter: 5,
      };
    },
    // Metodos
    methods: {
      //   Get Square Counter
      getSquareValue() {
        return this.counter * this.counter;
      },
      //   Increase
      increase() {
        this.counter++;
      },
      //   Decrease
      decrease() {
        this.counter--;
      },
    },
    // Cache
    computed: {
      //   Square Counter
      squareCounter() {
        return this.counter * this.counter;
      },
      //   Custom Title
      customTitle() {
        return this.title ? this.title : "Counter";
      },
    },
  };
</script>

<style>
  button {
    background: #64bb87;
    border-radius: 5px;
    border: 1px solid #ffffff;
    color: #ffffff;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }
  button:hover {
    background: #5aa67b;
    transition: 0.3s ease-in-out;
  }
</style>
