<template lang="html">
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <template v-for="product in productList">
                    <h3>{{product.title}}</h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a :href="item.url">{{item.name}}</a>
                            <span v-if="item.hot" class="hot-tag">Hot</span>
                        </li>    
                    </ul>
                </template>              
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="news in newsList">
                        <a :href="news.url">{{news.author_name}}</a>    
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <!--轮播图-->
            <!--<silder :slides="slides"></silder>-->
             <div class="block">
                <el-carousel>
                <el-carousel-item v-for="item in slides" :key="item">
                    <img :src="item.src">
                </el-carousel-item>
                </el-carousel>
            </div>
            
            <!-- 适配四个商品列表 -->
            <div class="index-board-list">
                <div class="index-board-item index-board-cake" v-for="(borad,index) in boradList" :class="['index-board-'+borad.id,{'line-last' : index%2 !==0 }]">
                    <div class="index-board-item-inner">
                        <h2>{{borad.title}}</h2>
                        <p>{{borad.description}}</p>
                        <div class="index-board-button">
                            <router-link :to="{path:'/details'}" class="button">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import silder from "../components/slider"

export default{
    name:"container",
    components:{
        silder
    },
    created(){
        this.$axios.get("/sxtstu/news/juhenews.php",{
           params:{
                count:10,
                type:"top"
           }
        })
        .then(res => {
            console.log(res.data);
            this.newsList=res.data;
        })
        .then(error => {

        })
    },
    data(){
        return{            
            slides: [{
                    src: require('../assets/slideShow/j1.jpg'),
                    title: "xxx11",
                    href: "xxx.xx.xxx"
                    },
                    {
                    src: require('../assets/slideShow/j2.jpg'),
                    title: "xxx22",
                    href: "xxx.xx.xxx"
                    },
                    {
                    src: require('../assets/slideShow/j3.jpg'),
                    title: "xxx33",
                    href: "xxx.xx.xxx"
                    },
                    {
                    src: require('../assets/slideShow/j4.jpg'),
                    title: "xxx44",
                    href: "xxx.xx.xxx"
                    }
                ],
            "productList":{
                "jydq":{
                    title:"家用电器",
                    list:[
                        {
                            name:"生活电器",
                            url:"http://www.baidu.com"
                        },
                        {
                            name:"厨卫大电",
                            url:"http://www.baidu.com",
                            hot:true
                        },
                        {
                            name:"厨房小电",
                            url:"http://www.baidu.com"
                        },
                        {
                            name:"家庭影音",
                            url:"http://www.baidu.com"
                        }
                    ]
                },
                "dnbg":{
                    title:"电脑办公",
                    list:[
                        {
                            name:"电脑整机",
                            url:"http://taobao.com"
                        },
                        {
                            name:"电脑配件",
                            url:"http://taobao.com"
                        },
                        {
                            name:"外设产品",
                            url:"http://taobao.com",
                            hot:true
                        },
                        {
                            name:"智能设备",
                            url:"http://taobao.com"
                        }
                    ]
                }
            },
            "newsList":[
                {
                    name:'环球地理',
                    url:'http://www.dili.com'
                },
                {
                    name:'央视新闻',
                    url:'http://www.cctvnews.com'
                }
            ],
            "boradList": [{
                title: "蛋糕美食",
                description: "那蛋糕太美我不敢吃",
                id:"cake"
                },
                {
                title: "珠宝专柜",
                description: "以闪耀灵动的完美切割,打造浪漫设计,用“心”编织每一分浓情蜜意",
                id:"jewellery"
                },
                {
                title: "鲜花美女",
                description: "素素稚颜惹人疼,相遇相逢恨别晚。万束鲜花配女美,愿与君行无生悔",
                id:"beauty"
                },
                {
                title: "萌宠无害",
                description: "一副人畜无害的样子,爱死了想不想把这个妹子撩回家",
                id:"pet"
                }
            ],
        }
    }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  min-height: 350px;
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-cake .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-jewellery .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-beauty .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-pet .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}

/* element轮播图样式 */
.el-carousel{
    height:350px;
    width:900px;
    margin:15px auto;
}
.el-carousel__container{
    height:350px;
    width:900px;
}
.el-carousel__item{
    height:350px;
    width:900px;
}
.el-carousel__item img {
    color: #475669;
    font-size: 14px;
    line-height: 350px;
    height:350px;
    width:900px;
    margin: 0;
}
</style>