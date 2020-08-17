<!-- 组件 - 搜索框 -->
<template>
  <div class="md-search-wrap">
      <i class="fa fa-search i1 search-icons" aria-hidden="true"></i>
      <!-- @keyup.enter="searchHandle" -->
      <input
        class="search-input"
        type="search"
        ref="search"
        :placeholder="placeholder"
        v-model="value"
      />
      <i class="fa fa-times-circle i2 search-icons" v-show="searchKeyWord" aria-hidden="true" @click="clearSearchKeyword"></i>
    <div class="search-button" @click="goSearch">
      搜索
    </div>
  </div>
</template>
<script>
// 图片 - 搜索图标
import icon from "./icon/search.png";
export default {
  name: "search",
  components: {
  },
  props: {
    // 下拉框
    placeholder: {
      type: String,
      default: () => ''
    },
    // 是否有右边过滤器功能
    searchKeyWord: {
      type: String,
      default: () => ''
    },
  },
  data() {
    return {
      icon,
      timer:null,
      value: "",
    };
  },
  // 双向绑定文本框的值
  model: {
    prop: "searchKeyWord",
    event: "change"
  },
  watch: {
    value: {
      handler(val) {
        this.$emit("change", val);
      },
      immediate:true
    },
  },
  methods: {
    goSearch(){
        this.$emit('goSearch')
    },
    clearSearchKeyword(){
      this.value=''
    }
  }
};
</script>
<style lang="less" scoped>
.md-search-wrap {
  display: flex;
  width: 95%;
  height: .88rem;
  padding: 0.16rem 0.24rem;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: .08rem;
  align-items: center;
  color: @lightGrayColor;
  font-size:@normalFontSize;
  .search-button{
    color: @bgColor;
    font-size: @normalFontSize;
    margin-left:.3rem;
  }
  .search {
    flex: 1;
    display: flex;
    background-color: #f5f5f5;
    border-radius: 0.08rem;
    overflow: hidden;
    .search-icons{
			.df-center();
      font-size: 0.4rem;
    }
    .i1 {
      background-color: #F3F4F7;
      margin-right: .16rem;
      margin-left: .24rem;
    }
    .i2 {
      padding: 0 .24rem;
    }
    &-icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0.09rem 0.1rem 0 0.16rem;
    }
    &-drag-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 0.48rem;
        height: 0.48rem;
        margin-left:.24rem;
        // margin-top:.08rem;
      }
    }
    &-input {
      flex: 1;
      border: none;
      outline: none;
      color: #282828;
      font-size: @normalFontSize;
      margin-left:.2rem;
      &::-webkit-input-placeholder {
        color: @fontColor;
        font-size: @normalFontSize;
      }
      &::-webkit-search-cancel-button {
        display: none;
      }
    }
  }
}
</style>