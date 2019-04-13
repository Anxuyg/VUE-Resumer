<template>
    <div id="editor">
       <nav>
         <ol>
           <li v-for="i in [0,1,2,3,4,5]"
           v-bind:class="{active: top === i}"
           v-on:click="top=i"
           >
           <svg class="icon">
                <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
             </svg>
           </li>  
           <!--   <li v-bind:class="{active: top === 0}" v-on:click="top = 0">
             <svg class="icon">
                <use xlink:href="#icon-xingming"></use>
             </svg>
           </li>
           <li v-bind:class="{active: top === 1}" v-on:click="top = 1">
             <svg class="icon">
                <use xlink:href="#icon-gongzuo"></use>
             </svg>
           </li>
           <li v-bind:class="{active: top === 2}" v-on:click="top = 2">
             <svg class="icon">
                <use xlink:href="#icon-shu"></use>
             </svg>
           </li>
           <li v-bind:class="{active: top === 3}" @click="top = 3">
             <svg class="icon">
                <use xlink:href="#icon-xin"></use>
             </svg>
           </li>
           <li :class="{active: top === 4}" @click="top=4">
             <svg class="icon">
                <use xlink:href="#icon-jiangbei"></use>
             </svg>
           </li>
           <li :class="{active: top===5}" @click="top=5">
             <svg class="icon">
                <use xlink:href="#icon-dianhua"></use>
             </svg>
           </li>-->
         </ol>
       </nav>
       <ol class="panes">
        <li :class="{active: top===0}">
           <message v-bind:profile="resume.profile"/>         
        </li>
        <li :class="{active: top===1}">
          <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"/>
        </li>
        <li :class="{active: top===2}">
          <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school: '学校',degree:'学位',time: '毕业时间'}" title="学习经历"/> 
        </li>
        <li :class="{active: top===3}">
          <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'项目内容'}" title="项目经历"/> 
        </li>
        <li :class="{active: top===4}">
          <h3>联系方式</h3>
          <el-form>
            <el-form-item label="QQ">
               <el-input v-model="resume.phones.qq"></el-input>
               </el-form-item>
               <el-form-item label="微信">
                 <el-input v-model="resume.phones.weixin"></el-input>
               </el-form-item>
               <el-form-item label="电话">
                 <el-input v-model="resume.phones.call"></el-input>
               </el-form-item>
               <el-form-item label="邮箱">
                 <el-input v-model="resume.phones.email"></el-input>
               </el-form-item>
          </el-form>
        </li>
        <li :class="{active: top===5}">
          <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖励详情'}" title="获奖情况"/>
        </li>
        
        <!--<li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: top===i}">
         tab {{i+1}}
         </li>
        -->
       </ol>
    </div>
</template>
<script>
import message from './message'
import ArrayEditor from './ArrayEditor'
export default {
  components: {message, ArrayEditor},
  props: ['resume'],
  data(){//data里只能放数据
    return {
      top:0,
      icons: ['xingming','gongzuo','shu','xin','jiangbei','dianhua']
    }
  }
}
</script>


<style lang="scss">
  #editor{
      min-height: 100px;
      display: flex;
      > nav {
        background:#000;
        width: 80px;
        > ol >li {
           text-align: center;
           padding: 16px 0;
           
           > .icon {
             width: 24px;
             height: 24px;
             fill: #fff;
           }
           &.active {
             background: #fff;
             > .icon {
               fill: #000;
             }
           }
        }
       
      }
      > .panes {
        flex: 1;      
        .container {
            position: relative;
            border-bottom: 1px solid rgb(204, 201, 201);
            margin-bottom: 20px;
            .el-icon-circle-close {
              position: absolute;
              top: 0;right: 0;
            }
        }
        >li{
          padding: 32px;
          display: none;
          height: 100%;
          overflow: auto;
          &.active {
            display: block;
            > h3 {
              margin-bottom: 20px;
            }
          }
        }
      }
  }
</style>