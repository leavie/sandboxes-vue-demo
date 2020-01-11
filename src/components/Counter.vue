<template>
  <div>
    width<input type="text" v-model="width"/>
    height<input type="text" v-model="height"/>
    <p>{{area}}</p>
    <button v-on:click="decreament(step)">-</button>
    <input type="range" min="1" max="100" step="1" v-model="step">
    <button v-on:click="increament(step)">+</button>
    <p :class="selectedStyle">Counter:{{count}} and styles:{{selectedStyle}}</p>
    <div v-for="style in styles" v-bind:key="style">
      <label>{{style}}</label>
      <input type="checkbox" v-bind:value="style" v-model="selectedStyle">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increament(step) {
      this.count += step * 1;
    },
    decreament(step) {
      this.count -= step * 1;
    },
    aream() {
      return Date.now() + this.width *0
    }
  },
  data() {
    return {
      step: 10,
      count: 0,
      selectedStyle: [],
      styles: ["red", "big", "font", "bg"],
      width: 1,
      height: 1,
    };
  },
  computed: {
    area() {
      return Date.now() + this.width*0
      return this.width * this.height
    }
  },
  props: ["a", "b"]
};
</script>

<style>
.red {
  color: red;
}

.big {
  font-size: 3rem;
}

.font {
  font-family: fantasy;
}

.bg {
  background-color: yellowgreen;
}
</style>
