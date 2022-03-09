<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu v-model:selectedKeys="highLighted"
            theme="dark"
            mode="horizontal"
            @select="select"
            :style="{ lineHeight: '64px' }">
      <div v-for="item in headerMenu"
           :key="item.value">
        <a-menu-item :key="item.path">{{item.name}}</a-menu-item>
      </div>
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
import { headerMenu } from "@/assets/js/menu.js";
import { onMounted, onUpdated } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log(useRoute());
const router = useRouter();
let highLighted = [route.path];
onMounted(() => {});

const highLightMenu = (path) =>
  headerMenu.findIndex((item) => item.path === path);

const select = (item) => {
  router.push(item.key);
};
</script>

<style scoped>
.header {
  display: flex;
}
.logo {
  width: 200px;
  height: 64px;
}
</style>