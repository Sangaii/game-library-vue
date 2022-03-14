<template>
  <div class="gameList">
    <div class="listHeader"></div>
    <div class="listContent">
      <div class="mainList">
        <div v-for="(item,index) in listLength"
             class="listItemWrap"
             :key="index">
          <div v-show="list[index]"
               class="listItem">
            <div class="listItemImg">
              <img :src="list[index]?list[index].src:''"
                   alt="">
            </div>
            <div class="listItemTxt">
              <div class="listItemTitle">{{list[index]?list[index].title:''}}</div>
              <div class="listItemDesp">{{list[index]?list[index].desp:''}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="listPage"></div>
    </div>
    <div class="listBottom"></div>
  </div>
</template>

<script setup lang="ts">
const list = [
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
  {
    title: "测试游戏",
    src: "https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg",
    desp: "测试描述",
  },
];

const listLength = list.length + (list.length % 4);
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