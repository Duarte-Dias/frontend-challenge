<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomePage from './components/HomePage/index.vue'

@Component({
	components: {
		HomePage,
	},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans");

#app, input, button {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  margin-top: 60px;
  text-align: center;
}


body {
  background-color: #f6f7f8;
}

.wrapper {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

</style>
