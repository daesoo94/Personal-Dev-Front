<template>
  <div class="Home" ref="Home">
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  mounted() {
    console.log('hello world');
  }
}
</script>

<style>
</style>