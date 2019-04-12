<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
     <Topbar class="topbar" v-on:preview="preview"/>
     <main>
       <Editor v-bind:resume="resume" class="editor"/>
       <Preview v-bind:resume="resume" class="preview"/>
     </main>
     <el-button id="exmPreview" v-on:click="exmPreview">退出预览</el-button>
  </div>
</template><!--html必须的结构-->

<script>
//局部组件匹配Frank.vue文件
//import Frank from './components/Frank.vue'
//局部组件匹配HelloWorld.vue文件
//import Hello from './components/Hello.vue'
 import Topbar from './components/Topbar.vue'
 import Editor from './components/Editor.vue'
 import Preview from './components/Preview.vue'
  export default {
    data(){
      return{
        previewMode: false,
        resume: {
            profile: {  name: '', city: '', bitrh: '' },
            workHistory: [
              {company: '', content: ''}],
            studyHistory: [
              {school:'', time: '', degree:''} ],
            projects: [ {name:'',content:''} ],
            awards: [{name:''}],
            phones: { call:'',email:'',weixin:'',qq:''}          
         }
      }
    },
    methods: {
      exmPreview(){
         this.previewMode = false
      },
      preview(){
        this.previewMode = true
      }
    },
    components: {
      //注意要引用
      Topbar,Editor,Preview
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /*如果浏览器不支持vh单位，可以使用100%，但是必须同时在他的父元素与祖先上同时设置 */
  display: flex;
  flex-direction: column;
  /*column让项目灵活的垂直显示 */
}
.topbar{
    position: relative;
    z-index: 1;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  
}

main {
  display: flex;
  flex: 1;
  /*让目标都有相同的长度，且忽略它们内部的内容： */
  background: #DDD;
}
main .editor{
  width: 40em;
  margin: 16px 8px 16px 16px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  overflow: hidden;
}
main .preview{
  flex: 1;
  margin: 16px 16px 16px 8px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
}
.previewMode > #topbar {
  display: none;
}
.previewMode #editor {
  display: none;
}
.previewMode .preview {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}
#exmPreview {
  display: none
}
.previewMode #exmPreview{
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
