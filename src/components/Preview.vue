<template>
    <div id="preview">
      <h1>{{resume.profile.name || '请填写姓名'}}</h1>
      <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月日'}}</p>
    <hr>
    <section v-if="filter(resume.workHistory).length>0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="workHistory in filter(resume.workHistory)">
           {{workHistory.company}}<br>
           {{workHistory.content}}
        </li>
      </ul>
     </section>
     <hr>
     <section v-if="filter(resume.studyHistory).length>0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="studyHistory in filter(resume.studyHistory)">
           {{studyHistory.school}}<br>
           {{studyHistory.time}}
           {{studyHistory.degree}}
        </li>
      </ul>
     </section>
     <hr>
     <section v-if="filter(resume.projects).length>0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="projects in filter(resume.projects)">
           {{projects.name}}
           {{projects.content}}
        </li>
      </ul>
     </section>
     <hr>
     <section v-if="filter(resume. awards).length>0">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="awards in filter(resume. awards)">
           {{awards.name}}
        </li>
      </ul>
     </section>
     <hr>
     <section>
      <h2>联系方式</h2>
      <ul>
        <li>
           {{resume.phones.qq}}
           {{resume.phones.weixin}}
           {{resume.phones.call}}
           {{resume.phones.email}}
        </li>
      </ul>
     </section>
    </div>
</template>


<style>
  
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

