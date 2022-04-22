<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed"
                    :trigger="null"
                    collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys"
              theme="dark"
              mode="inline">
        <div v-for="item in adminSideMenu"
             :key="item.value">
          <a-sub-menu v-if="item.children"
                      :key="item.value">
            <template #title>
              <span>
                <video-camera-outlined />
                <!-- icon失败 -->
                <!-- <Icon type="videoCameraOutlined" /> -->
                <span>{{item.name}}</span>
              </span>
            </template>
            <a-menu-item v-for="cItem in item.children"
                         :key="cItem.value">
              {{cItem.name}}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else>
            <user-outlined />
            <span>{{item.name}}</span>
          </a-menu-item>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="adminHeader">
        <menu-unfold-outlined v-if="collapsed"
                              class="trigger"
                              @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else
                            class="trigger"
                            @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="adminContentWrap">
        <div class="breadcrumb">
          <BreadCrumb :routes="acctRoutes" />
        </div>
        <div class="adminContent">
          Content
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, h } from "vue";
import { adminSideMenu } from "@/assets/js/menu.js";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue";
import { routes } from "@/routes/index";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
let acctRoutes: any;
if (routes[0].name === "Shop") {
  acctRoutes = routes[0].children;
}
let selectedKeys = ref<string[]>(["1"]);
let collapsed = ref<boolean>(false);
</script>
<style>
.breadcrumb {
  margin: 8px 0;
}
.trigger {
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.adminHeader {
  background: #fff;
  padding: 0;
  box-shadow: 2px 2px 2px 2px #eee;
}

.logo {
  height: 64px;
}

.adminContentWrap {
  background: "#eee";
  padding: 24px;
  min-height: calc(100vh - 64px);
}

.adminContent {
  background: #fff;
}
</style>
