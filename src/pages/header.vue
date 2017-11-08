<template>
    <div class="header">
        <div class="app-head">
            <div class="app-head-inner">
                <router-link :to="{path:'/'}"><img src="../assets/logo.png" /></router-link>
                <div class="head-nav">
                    <ul class="nav-list">
                        <li>登录</li>
                        <li class="nav-pile">|</li>
                        <li>注册</li>
                        <li class="nav-pile">|</li>
                        <li>关于</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"header",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 60px;
  line-height: 60px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 5px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}

</style>