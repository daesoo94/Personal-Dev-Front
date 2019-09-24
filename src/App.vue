<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
};
</script>

<style lang="scss" src="./styles/App.scss">
</style>