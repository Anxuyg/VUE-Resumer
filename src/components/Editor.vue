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
        <li :class="{active: top===0}">tab1</li>
        <li :class="{active: top===1}">tab2</li>
        <li :class="{active: top===2}">tab3</li>
        <li :class="{active: top===3}">tab4</li>
        <li :class="{active: top===4}">tab5</li>
        <li :class="{active: top===5}">tab6</li>
       </ol>
    </div>
</template>
<script>
export default {
  data(){
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
        >li{
          display: none;
          &.active {
            display: block;
          }
        }
      }
  }
</style>