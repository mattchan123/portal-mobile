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
        <img class="module-img" :src="item.imageUrl"/>
        <span class="module-name">{{item.name}}</span>
      </div>
    </div>
    <div class="news-web">
      <div class="web-item"
            v-for="(item,index) in newsWebList"
           :key="index"
           @click="goDetail(item.href)"
      >
        {{item.title}}
      </div>
    </div>
    <div class="web-app">
      <div class="app-item"
            v-for="(item,index) in webAppList"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppList"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppList"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppList"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="web-app-no-img">
      <div class="app-item"
            v-for="(item,index) in webAppListNoImg"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppListNoImg"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppListNoImg"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
      <div class="app-item"
            v-for="(item,index) in webAppListNoImg"
           :key="index"
           @click="goDetail(item.href)"
      >
        <img v-if="item.imageUrl" class="app-image" :src="item.imageUrl" />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="life-box">
      <div class="life-header">
        <div class="life-title"><i class="fa fa-search i1 search-icons" aria-hidden="true"></i>{{lifeModule.title}}</div>
        <div class="more">更多</div>
      </div>
      <div class="items-box">
        <div class="items-item"
            v-for="(item,index) in lifeModule.items"
            :key="index"
            @click="goDetail(item.href)">
            <img class="item-image" :src="item.imageUrl">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="convins-box">
        <div class="convins-item"
            v-for="(item,index) in lifeModule.convins"
            :key="index"
            @click="goDetail(item.href)">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="life-box">
      <div class="life-header">
        <div class="life-title"><i class="fa fa-search i1 search-icons" aria-hidden="true"></i>{{lifeModule.title}}</div>
        <div class="more">更多</div>
      </div>
      <div class="items-box">
        <div class="items-item"
            v-for="(item,index) in lifeModule.items"
            :key="index"
            @click="goDetail(item.href)">
            <img class="item-image" :src="item.imageUrl">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="convins-box">
        <div class="convins-item"
            v-for="(item,index) in lifeModule.convins"
            :key="index"
            @click="goDetail(item.href)">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="life-box">
      <div class="life-header">
        <div class="life-title"><i class="fa fa-search i1 search-icons" aria-hidden="true"></i>{{lifeModule.title}}</div>
        <div class="more">更多</div>
      </div>
      <div class="items-box">
        <div class="items-item"
            v-for="(item,index) in lifeModule.items"
            :key="index"
            @click="goDetail(item.href)">
            <img class="item-image" :src="item.imageUrl">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="convins-box">
        <div class="convins-item"
            v-for="(item,index) in lifeModule.convins"
            :key="index"
            @click="goDetail(item.href)">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="life-box">
      <div class="life-header">
        <div class="life-title"><i class="fa fa-search i1 search-icons" aria-hidden="true"></i>{{lifeModule.title}}</div>
        <div class="more">更多</div>
      </div>
      <div class="items-box">
        <div class="items-item"
            v-for="(item,index) in lifeModule.items"
            :key="index"
            @click="goDetail(item.href)">
            <img class="item-image" :src="item.imageUrl">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="convins-box">
        <div class="convins-item"
            v-for="(item,index) in lifeModule.convins"
            :key="index"
            @click="goDetail(item.href)">
            <span>{{item.name}}</span>
        </div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
      <div class="links">
        <div class="links-title links-box">{{lifeModule.links.title}}</div>
        <div class="links-items links-box" v-for="(item,index) in lifeModule.links.items" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="tab-wrapper">
      <div class="tab-header">
        <div class="tab-button left-tab" :class="activedTab===0?'activedTab':''" @click="activedTab=0">
          <img class="tab-header-image" v-show="activedTab===0" src="https://image.uc.cn/s/nav/g/olps/2015/0a932ebc13bff360412a16f74e33092f.png" alt="">
          <img class="tab-header-image" v-show="activedTab!==0" src="https://image.uc.cn/s/nav/g/olps/2015/4d2ee9199cc35b0dace9a0225e344882.png" alt="">
          软件
        </div>
        <div class="tab-button right-tab" :class="activedTab===1?'activedTab':''" @click="activedTab=1">
          <img class="tab-header-image" v-show="activedTab===1" src="https://image.uc.cn/s/nav/g/olps/2015/30aebe53ae91513d4588920dd124c438.png" alt="">
          <img class="tab-header-image" v-show="activedTab!==1" src="https://image.uc.cn/s/nav/g/olps/2015/836693206edf12b10516b499ea21ee2c.png" alt="">
          游戏
        </div>
      </div>
      <div class="tab-content">
        <div class="actived-content" v-show="activedTab===0">
          <div class="content-item"
              v-for="(item,index) in tab.softwareList"
              :key="index"
              @click="goDetail(item.href)">
              <img class="content-image" :src="item.imageUrl" alt="">
              <div>{{item.name}}</div>
          </div>
        </div>
        <div class="actived-content" v-show="activedTab===1">
          <div class="banner-wrapper">
            <div class="content-banner"
                v-for="(item,index) in tab.bannerList"
                :key="index"
                @click="goDetail(item.href)">
                <img class="banner-image" :src="item.imageUrl" alt="">
                {{item.name}}
            </div>
          </div>
          <div class="content-item"
              v-for="(item,index) in tab.gameList"
              :key="index"
              @click="goDetail(item.href)">
              <img class="content-image" :src="item.imageUrl" alt="">
              <div>{{item.name}}</div>
          </div>
        </div>
        <div class="sofeware-cate">
          <div class="cate-header">
            软件分类区
          </div>
          <div class="cate-wrapper">
            <div class="cate-item"               
                  v-for="(item,index) in tab.cateList"
                  :key="index">
                  {{item}}
            </div>
          </div>
          <div class="go-button">
            去商店 尽情玩>>
          </div>
        </div>
      </div>
    </div>
    <div class="life-box">
      <div class="life-header">
        <div class="life-title"><i class="fa fa-book i1 search-icons" aria-hidden="true"></i>{{cateModule.title}}</div>
        <!-- <div class="more">更多</div> -->
      </div>
      <div class="items-cate-box">
        <div class="items-cate-item"
            v-for="(item,index) in cateModule.children"
            :key="index">
            <div class="items-cate-title">{{item.title}}</div>
            <div class="item-cate-content">
              <div class="cate-items"
                  v-for="(cate,index) in item.items"
                  :key="index">
                  {{cate}}

              </div>
            </div>
        </div>
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
      activedTab:0,
      moduleTabs:[
        {
          id:0,
          name:'新闻',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
          href:''
        },
        {
          id:1,
          name:'小说',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
          href:''
        },
        {
          id:2,
          name:'影视',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
          href:''
        },
        {
          id:3,
          name:'购物',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
          href:''
        },
        {
          id:4,
          name:'生活',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
          href:''
        },
        {
          id:5,
          name:'更多',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/dcd4d3e70dddca8fa539f4dcb1cb520d.png',
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
      ],
      newsWebList:[
        {
          id:0,
          url:'',
          title:'新华网'
        },
        {
          id:1,
          url:'',
          title:'人民网'
        },
        {
          id:2,
          url:'',
          title:'中国日报'
        },
        {
          id:3,
          url:'',
          title:'中青网'
        },
        {
          id:4,
          url:'',
          title:'光明网'
        },
        {
          id:5,
          url:'',
          title:'中经网'
        },
      ],
      webAppList:[
        {
          id:0,
          name:'搜狐',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2017/6/92b3c92084c5c5cac151a00133ca4bc1?uc=1',
          url:''
        },
        {
          id:2,
          name:'淘宝',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2015/0a7df72b625bbd306d5ae90dc960e526.png',
          url:''
        },
        {
          id:3,
          name:'百度',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/d8dd7c4942b05b9e005a6a0283e42acd',
          url:''
        },
        {
          id:4,
          name:'天猫',
          imageUrl:'https://image.uc.cn/s/nav/g/olps/2016/9/ba8faf95e7d37370b433a417a930b8ab',
          url:''
        },
      ],
      webAppListNoImg:[
        {
          id:5,
          name:'网易',
          imageUrl:'',
          url:''
        },
        {
          id:6,
          name:'视频大全',
          imageUrl:'',
          url:''
        },
        {
          id:7,
          name:'微博',
          imageUrl:'',
          url:''
        },
        {
          id:8,
          name:'书旗小说',
          imageUrl:'',
          url:''
        },
      ],
      lifeModule:{
        title:'生活',
        items:[
          {
            id:0,
            name:'天气',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/fdf9659a0c0d1f59a1b787177f4d2eaf.png'
          },
          {
            id:1,
            name:'团购',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/deed21a78c9dbe5a75119c159ae63b36.png'
          },
          {
            id:2,
            name:'火车票',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/ec113c410179985604be2222a6fe02fe.png'
          },
          {
            id:3,
            name:'订机票',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/c39021bbd1b36cfd65bee91c14df6f11.png'
          },
          {
            id:4,
            name:'找房',
            imageUrl:'http://image.uc.cn/s/nav/g/olps/2018/7/9df342e14ec2d621e6b901e46f03bc20'
          },
          {
            id:5,
            name:'开奖',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/b3d066d990c18201a28c55c39f20907e.png'
          },
          {
            id:6,
            name:'充话费',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/e59b9f4225628a4ff0918ce5e7f27072.png'
          },
          {
            id:7,
            name:'查快递',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2014/10fa4dc8522b8f2a2ea144ab7db0e83d.png'
          },
          {
            id:8,
            name:'地图',
            imageUrl:'http://image.uc.cn/s/nav/g/olps/2018/1/0526eaf7bc6175bf9c15232401d37d2c.png'
          },
          {
            id:9,
            name:'查违章',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/448998ba280da660e80cc4497f0150a5.png'
          },
        ],
        convins:[
          {
            id:0,
            href:'',
            name:'51好工作',
          },
          {
            id:1,
            href:'',
            name:'百姓网',
          },
          {
            id:2,
            href:'',
            name:'安居客',
          },
          {
            id:3,
            href:'',
            name:'万年历',
          },
          {
            id:4,
            href:'',
            name:'电影',
          },
          {
            id:5,
            href:'',
            name:'摇号',
          },
          {
            id:6,
            href:'',
            name:'外卖',
          },
          {
            id:7,
            href:'',
            name:'58同城',
          },
        ],
        links:{
          title:'彩票',
          items:['彩票开奖','pk10','大乐透','福彩3D']
        }
      },
      cateModule:{
        title:'分类大全',
        children:[
          {
            title:'资讯',
            items:['新闻','体育','军事','汽车','科技','财经','理财','手机','娱乐']
          },
          {
            title:'休闲',
            items:['小说','搞笑','动漫','星座','音乐','社区','女性','视频']
          },
          {
            title:'生活',
            items:['购物','教育','旅游','美食','邮箱','招聘','银行','健康','房产','生活','综合']
          }
        ]
      },
      tab:{
        softwareList:[
          {
            name:'凤凰视频',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/d3195c7c35fa7c979e548f0fcf3c4f7d',
            href:''
          },
          {
            name:'百度糯米',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/98de76e6b2513634e33663d8c9b4a6da',
            href:''
          },
          {
            name:'唯品会',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/950d9f3c27cf2b86789b14c7f94ec8e3',
            href:''
          },
          {
            name:'Hola桌面',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/57b3289ab962ee83766e26b0a84fd2d9',
            href:''
          },
          {
            name:'去哪儿旅行',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/8b2186ddc17e4965ea1c88ece6eca73c',
            href:''
          },
          {
            name:'抱抱',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/c46db36a4f07735b781de9f430f17b96',
            href:''
          },
          {
            name:'蘑菇街',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/498f879d215856ff95da896ee87a32a4',
            href:''
          },
          {
            name:'映客直播',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/2bc073286623ac34a5d2f8f68a60848b',
            href:''
          },
        ],
        gameList:[
          {
            name:'东京战记',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/26edcdb708ce4122fb82723d05d44211',
            href:''
          },
          {
            name:'喵星大作战',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/1266abc6ce1a833edca1e51a7425eaab',
            href:''
          },
          {
            name:'创造与魔法',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/5cc95a6a2d06783375e7df27641afa93',
            href:''
          },
          {
            name:'崩坏3',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/b2b7873bed2538fc0e9be4fb9e075810',
            href:''
          },
          {
            name:'大掌门2',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/4a40b35a8171bbb10d9a3da5c71dfbb5',
            href:''
          },
          {
            name:'猎魂觉醒',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/8099692b735ab3e8ab484b29cc9d2602',
            href:''
          },
          {
            name:'绝地求生：刺激',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/1e3a20009c1ca169a4782ec8ee22cab6',
            href:''
          },
          {
            name:'绝地求生全军出击',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/0533b2090b72a8aa2d50bee439303042',
            href:''
          },
        ],
        bannerList:[
          {
            name:'独立游戏精品合集',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/3e7a3cb6e6e49bae1e5b91b64030106f',
            href:''
          },
          {
            name:'女生必玩游戏合集',
            imageUrl:'https://image.uc.cn/s/nav/g/olps/2018/1/2ccf22884e5d3d7640c7c44a49b50f27',
            href:''
          },
        ],
        cateList:[
          '装机必备',
          '实用工具',
          '看片神器',
          '免费电话',
          '最美软件',
          '手机美化',
          '私密聊天',
          'wifi神器',
        ]
      }
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
  color: @fontColor;
  height: 100%;
  overflow: scroll;
  .header{
    .df-column-center();
    background-color: @bgColor;
    .logo{
      color:#fff;
      padding:.4rem 0;
    }
    .news-present{
      width: 100%;
      padding: .2rem 0 .3rem;
      color:#fff;
      .df-center();
      .news-box{
        padding:0 .2rem
      }
    }
  }
  .module-tabs{
    .df-not-center(space-around);
    background-color: #f7f7f7;
    border-bottom: 1px solid #dfdede;
    padding: .2rem 0;
    .tabs-item{
      .df-column-center();
      .module-img{
        height: .5rem;
        width: .5rem;
        padding: .1rem 0;
      }
      .module-name{
      }
    }
  }
  .news-web{
    .df-not-center(space-around);
    padding: .2rem;
  }
  .web-app{
    color: #000;
    .df-center();
    flex-wrap: wrap;
    .app-item{
      width: 25%;
      padding: .3rem 0;
      font-size: .38rem;
      .df-center();
      .app-image{
        margin-right: .1rem;
        width: .45rem;
        height: .45rem;
      }
    }
  }
  .web-app-no-img{
    color: #000;
    .df-center();
    flex-wrap: wrap;
    border-top: 1px dashed #eae8e8;
    .app-item{
      width: 25%;
      padding: .3rem 0;
      font-size: .38rem;
      .df-center();
      .app-image{
        margin-right: .1rem;
        width: .45rem;
        height: .45rem;
      }
    }
  }
  .life-box{
    margin-top: .3rem;
    .life-header{
      .df-not-center(space-between);
      padding: .1rem .2rem;
      border-top: 3px solid @bgColor;
      background-color: #f7f7f7;
      .life-title{
        color: @bgColor;
        font-size: .4rem;
        .search-icons{
          margin-right: .2rem;
        }
      }
      .more{
        color: @fontColor;
      }
    }
    .items-box{
      .df-not-center(space-around);
      flex-wrap: wrap;
      .items-item{
        .df-column-center();
        padding:.3rem 0;
        width: 20%;
        .item-image{
          width: 1rem;
          height: 1rem;
          padding-bottom: .15rem;
        }
      }
    }
    .convins-box{
      .df-not-center(space-around);
      padding: 0 .15rem;
      flex-wrap: wrap;
      .convins-item{
        background-color: #f0f0f0;
        .df-center();
        width: 22.5%;
        margin: .1rem 0;
        box-sizing: border-box;
        padding: .2rem 0;
      }
    }
    .links{
      .df-not-center(space-around);
      .links-box{
        width: 20%;
        .df-center();
        padding: .2rem 0;
      }
      .links-title{
        color:@bgColor;
      }
    }
    .items-cate-box{
      .items-cate-item{
        .items-cate-title{
          line-height: 1;
          margin: .3rem 0;
          padding-left: .1rem;
          margin-left: .3rem;
          border-left: 3px solid @bgColor;
        }
        .item-cate-content{
          .df-not-center(flex-start);
          flex-wrap: wrap;
          color: @bgColor;
          padding: .2rem 0;
          .cate-items{
            width: 20%;
            .df-center();
            padding: .2rem 0;
          }
        }
      }
    }
  }
  .tab-wrapper{
    border-top: 4px solid @bgColor;
    margin-top: .2rem;
    .tab-header{
      font-size: .4rem;
      .df-center();
      .left-tab{
        border-right: 1px solid #e0e0e0;
      }
      .right-tab{
        border-left: 1px solid #e0e0e0;
      }
      .tab-button{
        text-align: center;
        width:50%;
        padding:.2rem 0;
        background-color: #f5f5f5;
        border-bottom:1px solid #e0e0e0;
        position: relative;

        .tab-header-image{
          width: .5rem;
          height: .5rem;
          position: absolute;
          left: .4rem;
        }
      }
      .activedTab{
        background: #fff;
        color:@bgColor;
        border-color: #fff;
      }
    }
    .actived-content{
      color: #000;
      font-size: .3rem;
      .df-not-center(space-around);
      flex-wrap: wrap;
      .content-item{
        width: 25%;
        padding: .3rem 0;
        .df-column-center();
        .content-image{
          height: 1.2rem;
          width: 1.2rem;
          padding-bottom: .15rem;
        }
      }
    }
    .sofeware-cate{
      .cate-header{
        padding-left: .2rem;
        border-left:3px solid @bgColor;
        margin-left: .2rem;
        margin-bottom: .3rem;
      }
      .cate-wrapper{
        .df-not-center(space-around);
        flex-wrap: wrap;
        .cate-item{
          width: 25%;
          padding: .25rem 0;
          color:#000;
          .df-center();
        }
      }
      .go-button{
        margin: 0 auto;
        width: 90%;
        .df-center();
        color: #000;
        padding:.2rem 0;
        background-color: #f0f0f0;
      }
    }
    .banner-wrapper{
      .df-not-center(space-around);
      .content-banner{
        width: 50%;
        .df-column-center();
        font-size: @normalFontSize;
        .banner-image{
          width: 70%;
          padding-bottom: .1rem;
        }
      }
    }
  }
}
</style>
