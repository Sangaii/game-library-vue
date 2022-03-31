<template>
  <a-layout class="layout">
    <Header></Header>
    <a-layout-content style="padding: 0 50px">
      <div class="breadcrumb">
        <BreadCrumb :routes="acctRoutes" />
        <!-- <a-breadcrumb :routes="acctRoutes">
          <template #itemRender="{ route, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.meta.title }}
            </span>
            <router-link v-else
                         :to="`${paths.join('/')}`">
              {{ route.meta.title }}
            </router-link>
          </template>
        </a-breadcrumb> -->
      </div>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px',minHeight:'calc(100vh - 190px)' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Game Library ©2022 Created by gy
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts" setup>
import Header from "./Header.vue";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
import { routes } from "@/routes/index.ts";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const basePath = "/";
let acctRoutes: any;
if (routes[0].name === "Shop") {
  acctRoutes = routes[0].children;
}
</script>
<style>
.breadcrumb {
  margin: 8px 0;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
