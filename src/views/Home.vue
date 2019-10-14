<template>
  <DefaultLayout>
  </DefaultLayout>
</template>

<script lang = "ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DefaultLayout from '../layout/DefaultLayout.vue';

@Component({
  components: {
    DefaultLayout
  }
})
export default class Home extends Vue {
  mounted() {
  }
}
</script>

<style>
</style>