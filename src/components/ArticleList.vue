<template>
  <div class="article-list">
    <ul>
      <li v-for="(articleData, index) of articleDatas" :key="index">
        <Article :articleData="articleData"/>
      </li>
    </ul>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IArticleData from '../interface/IArticleData';
import Article from './Article.vue';

@Component({
  components: {
    Article
  }
})
export default class ArticleList extends Vue {
  private articleDatas: Array<IArticleData> = [];

  mounted() {
    // DB에서 받아와서 Vuex에 저장해두고 쓰겠지만? -> 우선 하드코딩으로 게시글을 보인다.

    for (let i = 0; i < 50; i++) {
      this.articleDatas.push({
        title: `${i}번째 게시글`,
        uid: `ID${i}`,
        nick: `NickName${i}`,
        articleId: `Article${i}`,
        content: `이것은 내용물이다. 쏼라쏘라라 블라블라.`,
        created: new Date(),
        updated: null,
        likes: Math.floor(Math.random() * 100),
        pictures: [],
        comments: []
      })
    }
  }
}
</script>

<style>
</style>