<template>
  <div class="gameDetail">
    <div class="gameImage">
      <div class="centerImage">
        <div class="imgContent">
          <img :src="centerImg"
               :key="centerImg" />
        </div>
      </div>
      <div class="imageList">
        <div v-for="(item,index) in game.imageList"
             @click="setCenterImg(index)"
             :key="index">
          <div class="imgContent">
            <img :src="item">
          </div>
        </div>
      </div>
    </div>
    <div class="gameDesp">
      <div class="gameTitle">
        {{game.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import img1 from "@/assets/image/1.png";
import img2 from "@/assets/image/2.png";
import img3 from "@/assets/image/3.png";
import img4 from "@/assets/image/4.png";
import img5 from "@/assets/image/5.png";
const game = {
  imageList: [img1, img2, img3, img4, img5],
  name: "测试标题",
};
console.log("detail");
let centerImg = ref(game.imageList[0]);

const setCenterImg = (index: any) => {
  centerImg.value = game.imageList[index];
};
</script>

<style lang="less" scoped>
.gameDetail {
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  .gameImage {
    flex: 1;
    .centerImage {
      display: flex;
      justify-content: center;
      .imgContent {
        border: 1px solid #eee;
        padding: 8px;
        width: 400px;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .imageList {
      margin: 16px 0 0;
      display: flex;
      justify-content: center;
      .imgContent {
        cursor: pointer;
        border: 1px solid #eee;
        transition: 1s;
        padding: 4px;
        margin: 0 4px;
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .imgContent:hover {
        border: 1px solid #1890ff;
      }
    }
  }
  .gameDesp {
    flex: 1;
    .gameTitle {
      font-size: 24px;
      font-weight: bold;
    }
    .gameTitle::before {
      margin-right: 8px;
      vertical-align: -3px;
      content: "";
      display: inline-block;
      border-left: 6px solid #1890ff;
      height: 24px;
    }
  }
}
</style>