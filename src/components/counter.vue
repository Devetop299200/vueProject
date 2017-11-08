<template>
    <div class="counter">
        <div class="counter-component">
            <div class="counter-btn" @click="minus"> - </div>
            <div class="counter-show">
                <input type="text" v-model="number" @keyup="fixNumber">
            </div>
            <div class="counter-btn" @click="add"> + </div>
        </div>
    </div>            
</template>

<script>
export default{
    name:"counter",
    data(){
        return{
            number:1
        }
    },
    watch:{
        number(){
            this.$emit("on-change",this.number)
        }
    },
    props:{
        max:{
            type:Number,
            default:5
        },
        min:{
            type:Number,
            default:1
        }
    },
    methods:{
        fixNumber(){
            let fix;//最终值
            if(typeof this.number === "string"){
                fix = Number(this.number.replace(/\D/g,""));
            }
            if(fix > this.max || fix < this.min){
                fix = 1;
            }
            this.number = fix;
        },
        //加减法
        minus(){
            if(this.number <= this.min){
            return;
            }
            this.number--;
        },
        add(){
            if(this.number >= this.max){
                return;
            }
            this.number++;
        }
    }
}    
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>