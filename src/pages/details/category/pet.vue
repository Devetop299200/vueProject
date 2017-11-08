<template>
    <div class="pet">
        <div class="pet-top">
            <ul>
                <router-link :to="{path:'/details/pet/'+pet.path}" v-for="pet in petCategory" tag="li">{{pet.name}}</router-link>
            </ul>
        </div>
        <div class="pet-tottom">
            <router-view></router-view>
        </div>        
    </div>    
</template>

<script>
export default{
    name:"pet",
    data(){
        return{
            petCategory:[{
                name:"看看猫",
                path:"cat"
            },{
                name:"看看狗",
                path:"dog"
            }]
        }
    }
}    
</script>

<style scoped>
li{
  display:inline-block;
  margin:0 30px;
  padding: 10px 15px;
  background: #4fc08d;
  color:#fff;
  font-size: 16px;
}

.pet-tottom{
    margin-top: 20px;
    margin-left: 30px;
    width: 100%;
    height: 245px;
    background: #fff;
    text-align: center;
    font-size: 30px;
    line-height: 245px;
}

</style>