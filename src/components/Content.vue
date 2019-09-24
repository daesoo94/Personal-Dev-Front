<template>
  <div class="content">
    <slot/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Content extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>