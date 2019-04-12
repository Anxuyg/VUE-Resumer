<template>
    <div id="topbar">
      <div class="logo">
        Vue
      </div>
      <div class="actions">
        <el-button type="primary">登录</el-button>
        <el-button>注册</el-button>
        <el-button v-on:click="preview">预览</el-button>
        <el-button id="exmPreview">退出预览</el-button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    preview(){
      this.$emit('preview')
    }
  }
}
</script>


<style>
  #topbar{
     display: flex;
     justify-content: space-between;
     padding: 15px;
     align-items: center;
     font-size: 20px;
  }
</style>
