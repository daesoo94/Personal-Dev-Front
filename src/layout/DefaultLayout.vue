<template>
  <section>
    <Content>
      <slot/>
    </Content>
  </section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import Content from '../components/Content.vue';

@Component({
  components: {
    Content
  }
})
export default class DefaultLayout extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>