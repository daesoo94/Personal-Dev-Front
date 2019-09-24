<template>
  <div class="cardSlider">
    <Card v-for="(item, index) of items" :key="index"/>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from './Card.vue';

@Component({
  components: {
    Card
  }
})
export default class CardSlider extends Vue {
  private items: Array<string> = ['a','a','a','a','a','a'];
  
  mounted() {
  }
}
</script>

<style>
</style>