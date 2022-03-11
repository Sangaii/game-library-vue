<template>
  <div class="gameList">
    <div class="listHeader"></div>
    <div class="listContent">
      <div class="mainList">
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
        <div class="listItem">
          <div class="listItemImg">
            <img src="https://lmg.jj20.com/up/allimg/tp01/1ZZQ20QJS6-0-lp.jpg"
                 alt="">
          </div>
          <div class="listItemTxt">
            <div class="listItemTitle">测试标题</div>
            <div class="listItemDesp">测试描述</div>
          </div>
        </div>
      </div>
      <div class="listPage"></div>
    </div>
    <div class="listBottom"></div>
  </div>
</template>

<style scoped lang="less">
.mainList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.listItem {
  min-width: 200px;
  overflow: hidden;
  margin: 16px 8px;
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
</style>