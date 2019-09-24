<template>
  <div class="main">
    <ArticleList/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ArticleList from '../components/ArticleList.vue';

@Component({
  components: {
    ArticleList
  }
})
export default class Main extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>