<template>
  <div class="article">
    title: {{articleData.title}}<br/>
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

@Component
export default class Article extends Vue {
  @Prop()
  private articleData: IArticleData;

  mounted() {
  }
}
</script>

<style>
</style>