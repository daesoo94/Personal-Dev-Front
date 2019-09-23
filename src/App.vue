<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Content,
    Footer
  }
})
export default class App extends Vue {
};
</script>

<style lang="scss" src="./styles/app.scss">
</style>