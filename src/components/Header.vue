<template>
  <div class="header">
    <div id="menuToggle">
      <input type="checkbox" :checked="toggled" @click="toggle()">
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a v-for="(menu, index) of menus" :key="index">
          <li @click="menuClick(menu.routerName)">{{menu.title}}</li>
        </a>
      </ul>
    </div>
    <div class="title">Dev Note</div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import IMenuData from '../interface/IMenuData';

@Component
export default class Header extends Vue {
  // TODO : 제거 (임시 하드코딩)
  private menus: Array<IMenuData> = [
    { title: 'Home', routerName: 'Home' },
    { title: 'About', routerName: 'About' },
    { title: 'Contact', routerName: 'Contact' },
    { title: 'Login / Register', routerName: 'Login' }
  ];
  private toggled: boolean = false;

  mounted() {
  }

  private toggle(): void {
    this.toggled = !this.toggled;
  }

  private menuClick(routerName: string): void {
    this.toggled = false;
    if (this.$router.currentRoute.name !== routerName) {
      this.$router.push({ name: routerName });
    }
  }
}
</script>

<style>
</style>