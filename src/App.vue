<template>
  <div id="app">
    <Header/>
    <Content>
      <router-view/>
    </Content>
    <Footer/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from './layout/Header.vue';
import Content from './layout/Content.vue';
import Footer from './layout/Footer.vue';

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

<style lang="scss" src="./styles/App.scss">
</style>