<template>
  <div class="pagination">
    <!-- 上一页 -->
    <button @click="$emit('getPageNo',pageNo-1)" :disabled="pageNo === 1">上一页</button>
    <!-- 第一页 -->
    <button v-if="startNum.start>1"  @click="$emit('getPageNo',1)">1</button>
    <!-- 左边省略页 -->
    <button v-if="startNum.start>2">···</button>
    <!-- 显示页数组 -->
    <button v-for="(page,index) in startNum.end" :key="index" v-show="page>=startNum.start" :class="{active:pageNo == page}" @click="$emit('getPageNo',page)">{{page}}</button>
    <!-- 右边省略页 -->
    <button v-if="startNum.end<totalPage-1">···</button>
    <!-- 总页数 -->
    <button v-if="startNum.end<totalPage" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
    <!-- 下一页 -->
    <button @click="$emit('getPageNo',pageNo+1)" :disabled="pageNo === totalPage">下一页</button>
    <!-- 共条数 -->
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['pageNo','pageSize','total','continues'],
    computed: {
      //共计多少页
      totalPage(){
        return Math.ceil(this.total/this.pageSize)
      },
      //计算出连续的页码起始数字和结束数字
      startNum(){
        const {pageNo,totalPage,continues} = this
        let start = 0,end = 0;
        //删选出不正常的情况
        if(totalPage<continues){
          start = 1;
          end = totalPage;
        }else{
          start = pageNo - parseInt(continues/2);
          end = pageNo + parseInt(continues/2);
          if(start<1){
            start = 1;
            end = continues
          }
          if(end>totalPage){
            end = totalPage;
            start = end - continues +1;
          }
        }
        return {start,end}
      }
    },
  }
</script>

<style lang="less" scoped>
  .pagination {
      text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
