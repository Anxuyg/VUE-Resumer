<template>
    <div>
        <h3 style="margin-bottom: 20px">{{title}}</h3>
          <el-form>
            <div class="container" v-for="(work,index) in items">
               <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
                 <el-input v-model="work[key]"></el-input>
               </el-form-item>
               <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
            </div>
            <el-button type="primary" v-on:click="addworkHistory">添加</el-button>
          </el-form>
    </div>
</template>

<script>
export default {
    props: ['items','labels','title'],
    computed:{
      keys(){
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addworkHistory(){
        const empty = {}
        this.keys.map((key)=>{
           empty[key]=''
        })
        this.items.push(empty)
      },
      removeWorkHistory(index ){
        this.items.splice(index, 1)
      },
    }
}
</script>