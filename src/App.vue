<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <!-- <counter/> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <ol>
      <li>
        <router-link to="/counter">counter</router-link>
      </li>
      <li>
        <router-link to="/hello-world">hello world</router-link>
      </li>
    </ol>

    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
export default {
  name: "App",
  components: {
    HelloWorld,
    Counter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
