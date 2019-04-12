<template>
    <div>
        <h3>工作经历</h3>
          <el-form>
            <div class="container" v-for="(work,index) in workHistory">
               <el-form-item label="公司">
                 <el-input v-model="work.company"></el-input>
               </el-form-item>
                <el-form-item label="工作内容">
                 <el-input v-model="work.content"></el-input>
               </el-form-item>
               <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
            </div>
            <el-button type="primary" v-on:click="addworkHistory">添加</el-button>
          </el-form>
    </div>
</template>

<script>
export default {
    props: ['workHistory'],
    methods: {
      addworkHistory(){
        this.workHistory.push({
        company:'',content:''
        })
      },
      removeWorkHistory(index ){
        this.workHistory.splice(index, 1)
      },
    }
}
</script>
