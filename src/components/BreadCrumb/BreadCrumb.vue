<template>
  <div>
    <span v-for="(item, index) in matched"
          :key="index">
      <router-link v-if="index !== 0 && index !== matched.length - 1"
                   :to="item.path">
        {{item.meta.title}}
      </router-link>
      <span v-else>{{item.meta.title}}</span>
      {{(index !== 0 && index !== matched.length - 1 ) ? ' / ':''}}
    </span>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// interface Route {
//   path: string;
//   name: String;
//   component: Promise<any>;
//   meta: any;
//   children: Array<Route>;
// }
const route = useRoute();
// console.log("route", route);
// console.log(
//   "route.matched",
//   route.matched.filter((item) => item.meta && item.name !== "Shop")
// );
const matched = route.matched.filter((item) => item.meta);
// const router = useRouter();
// const { routes } = defineProps({
//   routes: {
//     type: Array as () => Array<Route>,
//     required: true,
//     default: () => [],
//   },
// });
</script>