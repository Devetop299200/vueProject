<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li :class="{active:index === nowIndex}" v-for="(choose,index) in chooses" @click="chooseType(index)">{{choose.label}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'caketype',
    data(){
        return{
            nowIndex:0
        }
    },
    props:{
        chooses:{
            type:Array,
            default:function(){
                return[
                    {
                        label:"test",
                        value:0
                    }
                ]
            }
        }
    },
    methods:{
        chooseType(index){
            this.nowIndex = index;
        }
    }
}
</script>

<style scoped>
.chooser-component {
position: relative;
display: inline-block;
}
.chooser-list li{
display: inline-block;
border: 1px solid #e3e3e3;
height: 25px;
line-height: 25px;
padding: 0 8px;
margin-right: 5px;
border-radius: 3px;
text-align: center;
cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>