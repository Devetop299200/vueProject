<template>
    <div class="details">
        <div class="detail-wrap">
            <div class="detail-left">
                <div class="product-board">
                    <img src="../../assets/images/1.png" alt="">
                    <ul>
                        <router-link active-class="active" tag="li" v-for="product in products" :to="{path:'/details/'+product.path}">{{product.name}}</router-link>
                    </ul>
                </div>
            </div>
            <div class="detail-right">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>    
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"details",
    data(){
        return{
            products:[
                {
                    name:"蛋糕美食",
                    path:"cake"
                },
                {
                    name:"珠宝专柜",
                    path:"jewellery"
                },
                {
                    name:"鲜花美女",
                    path:"beauty"
                },
                {
                    name:"萌宠无害",
                    path:"pet"
                }
            ],
        }
    }
}    
</script>

<style scoped>
.detail-wrap {
  width:1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
</style>