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
          <h3>个人信息</h3>
          <el-form>
            <el-form-item label="姓名">
              <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="城市">
              <el-input v-model="profile.city"></el-input>
            </el-form-item>
            <el-form-item label="出生年月">
              <el-input v-model="profile.birth"></el-input>
            </el-form-item>
          </el-form>
        </li>
        <li :class="{active: top===1}">
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
        </li>
        <li :class="{active: top===2}">
          <h3>学习经历</h3>
        </li>
        <li :class="{active: top===3}">
          <h3>项目经历</h3>
        </li>
        <li :class="{active: top===4}">
          <h3>获奖情况</h3>
        </li>
        <li :class="{active: top===5}">
          <h3>联系方式</h3>
        </li>
        <!--<li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: top===i}">
         tab {{i+1}}
         </li>
        -->
       </ol>
    </div>
</template>
<script>
export default {
  data(){//data里只能放数据
    return {
      top:0,
      icons: ['xingming','gongzuo','shu','xin','jiangbei','dianhua'],
      profile: {
         name: '',
         city: '',
         bitrh: ''
      },
      workHistory: [
        {company: '', content: ''}
      ]
    }
  },
  methods:{
    addworkHistory(){
      this.workHistory.push({
        company:'',content:''
      })
    },
     removeWorkHistory(index ){
    this.workHistory.splice(index, 1)
    },
  },
 
  created(){

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
          }
        }
      }
  }
</style>