<template>
  <DefaultLayout>
    <ArticleList/>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DefaultLayout from '../layout/DefaultLayout.vue';
import ArticleList from '../components/ArticleList.vue';

@Component({
  components: {
    DefaultLayout,
    ArticleList
  }
})
export default class Home extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>