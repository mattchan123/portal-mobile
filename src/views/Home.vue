<template>
  <div class="home">
    <div class="header">
      <h1 class="logo">
        网址导航
      </h1>
      <searchBar :placeholder="'输入关键词'" v-model="searchKeyWord" @goSearch="goSearch"></searchBar>
      <div class="news-bar"></div>
      <div class="news-present">
        <div class="news-box"
             v-for="(item,index) in newsList"
             :key="index"
             @click="goDetail(item.url)"
        >
          {{item.title}}
  
        </div>
      </div>
    </div>
    <div class="module-tabs">
      <div class="tabs-item"
           v-for="(item,index) in moduleTabs"
           :key="index"
           @click="goDetail(item.href)"
      >
        <image class="module-img" :src="item.imageUrl"/>
        <span class="module-name">{{item.name}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import searchBar from '@/components/searchBar'
export default {
  name: 'Home',
  components: {
    searchBar
  },
  data () {
    return {
      searchKeyWord:'',
      moduleTabs:[
        {
          id:0,
          name:'新闻',
          imageUrl:'',
          href:''
        },
        {
          id:1,
          name:'小说',
          imageUrl:'',
          href:''
        },
        {
          id:2,
          name:'影视',
          imageUrl:'',
          href:''
        },
        {
          id:3,
          name:'购物',
          imageUrl:'',
          href:''
        },
        {
          id:4,
          name:'生活',
          imageUrl:'',
          href:''
        },
      ],
      newsList:[
        {
          id:0,
          url:'',
          title:'研考国家线预计4月中旬公布'
        },
        {
          id:1,
          url:'',
          title:'孕妇泰国坠崖案宣判'
        },
      ]
    }
  },
  methods: {
    goDetail(url){
      console.log(url);
    },
    goSearch(){
      console.log(this.searchKeyWord);
    }
  }
}
</script>
<style scoped lang="less">
.home{
  font-size: @normalFontSize;
  .header{
    .df-column-center();
    background-color: @bgColor;
    .logo{
      color:#fff;
      padding:.4rem 0;
    }
    .news-present{
      width: 100%;
      padding: .2rem;
      color:#fff;
      .df-center();
      .news-box{
        padding:0 .2rem
      }
    }
  }
}
</style>
