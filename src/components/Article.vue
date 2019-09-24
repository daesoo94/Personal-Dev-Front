<template>
  <div class="article">
    title: {{articleData.title}}<br/>
    <CardSlider/>
    content: {{articleData.content}}<br/>
    updated: {{articleData.updated}}<br/>
    created: {{articleData.created}}<br/>
    pictures: {{articleData.pictures}}<br/>
    comments: {{articleData.comments}}<br/>
    likes: {{articleData.likes}}<br/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IArticleData from '../interface/IArticleData';
import CardSlider from './CardSlider.vue';

@Component({
  components: {
    CardSlider
  }
})
export default class Article extends Vue {
  @Prop()
  private articleData: IArticleData;

  mounted() {
  }
}
</script>

<style>
</style>