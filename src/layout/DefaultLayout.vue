<template>
  <section>
    <slot/>
  </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class DefaultLayout extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>