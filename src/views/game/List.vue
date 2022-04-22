<template>
  <div class="gameList">
    <div class="listHeader"></div>
    <div class="listContent">
      <div class="mainList">
        <div v-for="(item,index) in list"
             class="listItemWrap"
             @click="toDetail(item.id)"
             :key="index">
          <div class="listItem">
            <div class="listItemImg">
              <img :img="item.img"
                   alt="">
            </div>
            <div class="listItemTxt">
              <div class="listItemTitle">{{item.name}}</div>
              <div class="listItemDesp">{{item.desp}}</div>
            </div>
          </div>
        </div>
        <div v-for="(item,index) in listLength"
             class="listItemWrap"
             :key="index"></div>
      </div>
      <div class="listPage"></div>
    </div>
    <div class="listBottom">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { games } from "@/api/Games/index";
let list = ref([] as any);
games()
  .then((res) => {
    console.log("res", res);
    if (res.status === "0") {
      list.value = res.data;
    }
  })
  .catch((err) => {
    console.log(err);
  });
const router = useRouter();
const listLength = 4 - (list.value.length % 4);

const toDetail = (id: any) => {
  router.push("/shop/detail");
};
</script>


<style scoped lang="less">
.mainList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.listItemWrap {
  min-width: 200px;
  width: 25%;
}
.listItem {
  overflow: hidden;
  margin: 16px 16px;
  padding-bottom: 8px;
  border: 1px solid #eee;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 3px #eee;
}
.listItem:hover {
  box-shadow: 0 0 3px;
  animation-duration: 5s;
}
.listItemImg {
  min-height: 100px;
}
.listItemTxt {
  text-align: center;
  .listItemTitle {
    margin-top: 4px;
    font-weight: bold;
  }
}
.listItemDesp {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /* 多行要基于webkit盒模型 */
  -webkit-box-orient: vertical; /* 设置对齐方式 virtical：垂直的； */
  -webkit-line-clamp: 2; /* 设置多行行数 */
}
.dn {
  display: none;
}
</style>