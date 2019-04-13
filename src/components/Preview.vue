<template>
    <div id="preview">
      <div class="top">
      <h1>{{resume.profile.name || '请填写姓名'}}</h1>
      <p>
        居住城市：{{resume.profile.city || '请填写城市'}} <br> 出生年月： {{resume.profile.birth || '请填写出生年月日'}}
      </p>
      </div>
      <section class="blue" v-if="filter(resume.workHistory).length>0">
      <h2>工作经历</h2>
      <ul class="works">
        <li v-for="workHistory in filter(resume.workHistory)">
           <p>{{workHistory.company}}</p>
           <span>{{workHistory.content}}</span>
        </li>
      </ul>
     </section>
      <section class="green" v-if="filter(resume.studyHistory).length>0">
      <h2>学习经历</h2>
      <ul class="schools">
        <li v-for="studyHistory in filter(resume.studyHistory)">
           <p>学校：{{studyHistory.school}}</p>
           <span>学位：{{studyHistory.degree}}</span><br>
           <span>毕业时间：{{studyHistory.time}}</span>
        </li>
      </ul>
     </section>
     <section class="blue" v-if="filter(resume.projects).length>0">
      <h2>项目经历</h2>
      <ul class="works">
        <li v-for="projects in filter(resume.projects)">
           <p>{{projects.name}}</p>
           <span>{{projects.content}}</span>
        </li>
      </ul>
     </section>
     <section class="green">
      <h2>联系方式</h2>
      <ul class="schools">
        <li>
           QQ：{{resume.phones.qq}}<br>
           微信：{{resume.phones.weixin}}<br>
           电话：{{resume.phones.call}}<br>
           邮箱：{{resume.phones.email}}<br>
        </li>
      </ul>
     </section>
     <section class="blue" v-if="filter(resume. awards).length>0">
      <h2>获奖情况</h2>
      <ul class="works">
        <li v-for="awards in filter(resume. awards)">
           <p>{{awards.name}}</p>
        </li>
      </ul>
     </section>
     
    </div>
</template>


<style lang="scss">
.preview{

    > .top{
      background: rgb(127, 127, 128);
      padding: 20px;
      color: #fff;
       > h1{
         text-align: center;
       }
       > p {
         padding: 10px;
         text-align: center;
        }
      }
    > .blue {
       padding: 20px;
       background: rgb(246, 248, 247);
       color: rgb(15, 15, 15);
       > .works {
         margin: 20px;
         line-height: 20px;
         >li>p{
         padding: 10px;
         font-weight: 600;
         font-size: 15px;
         }
         span {
          padding: 20px;
         }
       }
    } 
    > .green{
         padding: 20px;
         background:  rgb(127, 127, 128);
         color: #fff;
           > .schools {
             margin: 20px;
            padding: 10px;
           font-weight: 600;
     }
  }
}
</style>

<script>
export default {
  props: ['resume'],
  methods: {
    filter(array){
      return array.filter(item=> !this.isEmpty(item))
    },
    isEmpty(object){
      let empty = true
      for(let key in object){
        if(object[key]){
           empty = false
           break
        }
      }
    }
  }
}
</script>

