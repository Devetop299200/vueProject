<template>
    <div class="selection-component">
        <div class="selection-show" @click="toggleDrop">
            <span>{{selections[nowIndex].label}}</span>
            <div class="arrow"></div>
        </div>
        <!-- 下拉框 -->
        <div class="selection-list" v-show="isDrop">
            <ul>
                <li v-for="(selection,index) in selections" @click="chooseSelection(index)">{{selection.label}}</li>
            </ul>
        </div>    
    </div>
</template>

<script>
    export default{
        name:"selector",
        data(){
            return{
                nowIndex:0,//默认显示第一个
                isDrop:false //下拉框
            }
        },
        props:{
            selections:{
                type:Array,
                default:function(){
                    return[{
                        label:'test',
                        value:0
                    }]
                }
            }
        },
        methods:{
            //控制显示与隐藏的
            toggleDrop(){
                this.isDrop = !this.isDrop;
            },
            chooseSelection(index){
                this.nowIndex = index;
                this.isDrop = false;
            }
        }
    }
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>