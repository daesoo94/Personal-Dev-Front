<template>
  <div class="card">
    <div class="inner">
      <img src="/assets/default.png">
    </div>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>