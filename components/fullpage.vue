<template>
  <div class="fullpage" :style="{ transform: `translateY(${innerHeight}px)` }" id="fullpage" @transitionend="scrollEnd">
    <div class="fullpage__item" :class="[`${active === 0 ? 'active' : ''}`]">
      <!-- <ParticlesBg type="circle" :bg="true" /> -->
      <div class="item__box welcome">
        <h1>Hey, I'm WangJia.</h1>
        <p>👨‍💻前端届的小学生</p>
        <p>近8年前端开发经验，2年大型项目架构优化经验</p>
        <p>以及2年以上带队经验，具有大型项目优化、项目技术难点攻克、项目运维部署、以及 Node.js 服务端等开发经验。</p>
        <div class="fe__info" id="fe__info"></div>
      </div>
    </div>
    <div class="fullpage__item" :class="[`${active === 1 ? 'active' : ''}`]">
      <div class="item__box">
        <div class="work__experience">
          <h1>👨‍💻 - 工作经历 - </h1>
          <div class='content'>
            <div class='card'>
              <h2>安徽百得思维信息科技有限公司</h2>
              <sub>2021-4 ~ 至今</sub>
              <p>1、工作期间担任讯飞消费者 BG 企业数字化部门主要开发人员，负责业务线C端项目和B端项目的前端开发、需求评审、工时评估；</p>
              <p>2、主要使用Vue技术栈和React技术栈来开发Web项目；</p>
              <p>3、使用微前端架构来拆分复杂的中大型项目，解耦模块；</p>
              <p>4、通过 Drone CI/CD + Docker 实现自动化部署项目；</p>
              <p>5、带领实习生开发及指导组内其他人员开发；</p>
            </div>
            <div class="card">
              <h2>联发科技（合肥）有限公司</h2>
              <sub>2018-12 ~ 2021-4</sub>
              <p>1、工作期间担任Linux TV Teams主要开发人员，负责TV web项目的前端开发；</p>
              <p>2、主要以原生JavaScript作为开发语言，以stylus作为css预处理器来开发项目；</p>
              <p>3、基于WebSocket与底层进行数据传递，及消息推送；</p>
              <p>4、集成i18n实现国际化支持；</p>
              <p>5、通过gulp+rollup编译运行项目，最终并将项目前后端分离部署在TV Browser上；</p>
              <p>6、解决Teams内项目难点，帮助其他同事解决分析问题及Review小组内成员Code；</p>
            </div>
            <div class='card'>
              <h2>安徽百得思维信息科技有限公司</h2>
              <sub>2018-4 ~ 2018-12</sub>
              <p>1、工作期间担任讯飞云计算研究院AI平台研发线主要开发人员，负责AI研发线web项目的前端开发；</p>
              <p>2、主要以vue技术栈开发Web项目，使用sass作为css预处理器来构建项目；</p>
              <p>3、通过axios库及nginx反向代理来解决前后端数据的传递，及跨域问题；</p>
              <p>4、通过webpack编译运行项目，最终并将项目前后端分离部署在服务器上；</p>
            </div>
            <div class='card'>
              <h2>爱空间（北京）科技有限公司</h2>
              <sub>2017-3 ~ 2018-3</sub>
              <p>1、工作期间担任技术中心前端开发人员，负责公司内部管理平台的开发;</p>
              <p>2、主要以 Vue 技术栈来开发项目，并通过 webpack 编译运行项目；</p>
            </div>
            <div class='card'>
              <h2>北京乐考无忧教育科技有限公司</h2>
              <sub>2015-8 ~ 2016-12</sub>
              <p>1、工作期间担任前端主要开发人员，负责将设计图转化为页面，并解决在各浏览器中兼容问题；</p>
              <p>2、负责前端数据展示与后端交互；</p>
              <p>3、负责开发常用插件以及公共库的封装；</p>
              <p>4、负责前端部分代码重构，减少代码冗余；</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullpage__item" :class="[`${active === 2 ? 'active' : ''}`]">
      <div class="item__box">
        <div class="project__experience">
          <h1>💁‍♂️ - 项目经历 - </h1>
          <div class='content'>
            <div class='card'>
              <h3>TurboDesk<span>C端</span></h3>
              <p>项目描述：基于OpenAI GPT3.5及讯飞星火大模型打造AI运营工作台。</p>
              <p>技术栈：Electron、React、Ant Design、markdown-it、axios、Sentry</p>
              <p>项目地址：<a href="https://turbodesk.cn/" target="_blank">https://turbodesk.cn/</a></p>
            </div>
            <div class='card'>
              <h3>讯飞AI中台<span>B端</span></h3>
              <p>项目描述：集应用、创造、管理和展示AI能力及解决方案于一体。从数据采集、数据标注到AI模型训练，直至AI服务输出，提供一体化AI管理平台。</p>
              <p>技术栈：React、React-Router、Redux、antd、sass、axios、qiankun</p>
              <p>项目地址：<a href="http://aip.iflytek.com/" target="_blank">http://aip.iflytek.com/</a></p>
            </div>
            <div class='card'>
              <h3>MulitMediaPlayer<span>B端</span></h3>
              <p>项目描述：支持以U盘、移动硬盘和DLNA等方式访问，用于TV系统中播放图片、音乐和视频。</p>
              <p>技术栈：JavaScript、WebSocket、stylus</p>
              <p>项目地址：<i>MulitMediaPlayer属于TV内置模块，外网无法访问。</i></p>
            </div>
            <div class='card'>
              <h3>讯飞云官网子模块<span>B端</span></h3>
              <p>服务编排：将传统单点AI能力进行可视化组合编排，提供serverless免运维服务调用，降低开发者使用门槛，提升开发效率。</p>
              <p>计量授权：管理线上AI能力及其受限资源，为APPID进行授权，包括：受限资源的时授、量授、流控授权。</p>
              <!-- <p>引擎平台：解决AI能力引擎上线效率问题，各引擎服务化快速集成、迭代，统一服务架构，不需要再针对各引擎分别进行封装，统一调用方式，提供统一的调用接口，方便开发AI能力，促使AI能力现网运行透明化。</p> -->
              <p>技术栈：Vue、Vue-Router、Vuex、element-ui、sass、axios</p>
            </div>
            <div class='card'>
              <h3>魔盒系统<span>内部</span></h3>
              <p>项目描述：魔盒系统主要模块有用户中心、基础数据、商品系统、crm系统、设计管理系统、运输管理系统等。</p>
              <p>技术栈：jQuery</p>
              <p>项目地址：<a href='https://uc.ikongjian.com/' target='_blank'>https://uc.ikongjian.com/</a></p>
            </div>
            <div class='card'>
              <h3>乐考无忧官网<span>C端</span></h3>
              <p>项目描述：属考研培训的教育类网站，实现了在线授课，资料下载，定制专属课程，资讯展示，院校信息查询，在线试题测试，活动展示，辅助线下课程销售，辅助教学。</p>
              <p>技术栈：jQuery</p>
              <p>项目地址：<a href='http://www.lookwell.com/' target='_blank'>http://www.lookwell.com/</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullpage__item" :class="[`${active === 3 ? 'active' : ''}`]">
      <div class="item__box">
        <div class="individual__project">
          <h1>👏 - 个人项目 - </h1>
          <div class='content'>
            <div class='card'>
              <h3>上一次时间</h3>
              <sub>描述：一款为你记录上一次发生的事情是什么时候的微信小程序</sub>
              <p>主要功能：支持标签分类管理，支持历史版本记录</p>
              <p>技术栈：</p>
              <p>&nbsp;&nbsp;Server端：Koa、koa-log4、MySQL、pm2</p>
              <p>&nbsp;&nbsp;Client端：uni-app微信小程序</p>
              <p class='last_time'>预览：</p>
            </div>
            <div class='card'>
              <h3>轻盈记账</h3>
              <sub>描述：一款小而美的无广告的记账小程序</sub>
              <p>主要功能：支持当月账单浏览、账户总览、日期报表查询、导入导出</p>
              <p>技术栈：</p>
              <p>&nbsp;&nbsp;Server端：Express、winston、MySQL、pm2</p>
              <p>&nbsp;&nbsp;Client端：原生微信小程序</p>
              <p class='light_bill'>预览：</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fullpage__item" :class="[`${active === 4 ? 'active' : ''}`]">
      <div class="item__box">
        <div class="base__info">
          <h1>✨ - 关于我 - </h1>
          <ul>
            <li class="info__item">wangjia125513819@gmail.com</li>
            <li class="info__item">安徽 合肥</li>
            <li class="info__item">1993/03</li>
            <li class="info__item">WeChat</li>
          </ul>
        </div>
      </div>
      <footer>
        <div style="width: 500px; margin: 0 auto; padding: 20px 0;">
          <a target='_blank' href='https://beian.miit.gov.cn' style="display: inline-block; text-decoration: none; height: 20px;line-height: 20px; vertical-align: middle; margin-right: 50px; color: rgba(255, 255, 255, .75);">皖ICP备2022015893号</a>
          <a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34011102003334' style=
          "display: inline-block; text-decoration: none; height: 20px; line-height: 20px; vertical-align: middle;"><img src="./../assets/icons/beian.png" style="float: left;"/><p style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: rgba(255, 255, 255, .75);">皖公网安备 34011102003334号</p></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Prism from 'prismjs'

import type { Ref } from 'vue'

import '@glorious/demo/dist/gdemo.min.css'
import 'prismjs/themes/prism-tomorrow.css'
let doc: any;
let activeIndex = 0
let iHeight = 0
let scrollState = false
let GDemo: any = null
let active: Ref<number> = ref(0)
let innerHeight: Ref<number>  = ref(0)

function scrollPage(e: WheelEvent | TouchEvent) {
  if (!scrollState) {
    scrollState = true
    if (e.deltaY > 0) { // Down
      if (activeIndex < 4) {
        activeIndex++
      } else {
        scrollState = false
        return false
      }
    } else { // Up
      if (activeIndex > 0) {
        activeIndex--
      } else {
        scrollState = false
        return false
      }
    }
    active.value = activeIndex
    innerHeight.value = -activeIndex * iHeight
  }
}

function scrollEnd() {
  scrollState = false
}

function bindScroll() {
  doc.querySelector('#fullpage').addEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault()
    scrollPage(e)
  }, { passive: false })
  doc.querySelector('#fullpage').addEventListener('touchmove', (e: TouchEvent) => {
    e.preventDefault()
    scrollPage(e)
  }, { passive: false })
}

function unbindScroll() {
  doc.querySelector('#fullpage').removeEventListener('wheel', (e: WheelEvent) => {
    e.preventDefault()
    scrollPage(e)
  }, { passive: false })
  doc.querySelector('#fullpage').removeEventListener('touchmove', (e: TouchEvent) => {
    e.preventDefault()
    scrollPage(e)
  }, { passive: false })
}

function initTerminal() {
  let terminal = new GDemo('#fe__info')
  const code = `
function ResumeOfWangJia(){
  console.log("Loading for you...");
}

ResumeOfWangJia();
`
  const highlightCode = Prism.highlight(code, Prism.languages.javascript, 'javascript')

  terminal
    .openApp('editor', { minHeight: '390px', windowTitle: 'resume.js' })
    .write(highlightCode, { onCompleteDelay: 500 })
    .openApp('terminal', { minHeight: '390px', promptString: '$' })
    .command('node ./resume', { onCompleteDelay: 500 })
    .respond('我会做什么:')
    .respond('1、熟练使用HTML5、CSS3、JavaScript等语言，日常主要以Vue技术栈和React技术栈开发项目；')
    .respond('2、熟练使用Electron、微信小程序、uni-app等其他跨平台框架；')
    .respond('3、熟练使用Nuxt.js服务端渲染，以及Node.js、MySQL等平台及语言；')
    .respond('4、了解Linux系统基本命令，及Nginx、Docker等应用的基本使用；')
    .respond('5、熟悉前端性能优化，深知代码的健壮性、可扩展性、可维护性，以及丰富的用户体验认知；')
    .respond('别忘记向下滑动噢👀')
    .end();
}

onMounted(() => {
  if (process.client) {
    doc = document
    iHeight = window.innerHeight
    GDemo = useNuxtApp().vueApp.config.globalProperties.GDemo
    bindScroll()
    initTerminal()
  }
})

onUnmounted(() => {
  unbindScroll()
})

</script>

<style scoped lang="stylus">
.fullpage
  width 100%
  height 100%
  transition transform 1.5s ease-out
  >.fullpage__item
    width 100%
    height 100%
    background-image url("./../assets/images/texture.png")
    position relative
    &:nth-child(1)
      background-color #1661ab
    &:nth-child(2)
      background-color #45b787
    &:nth-child(3)
      background-color #5C469C
    &:nth-child(4)
      background-color #00C4FF
    &:nth-child(5)
      background-color #142334
    >.item__box
      width 1120px
      padding 10px 0
      margin 0 auto
      color #fff
      >p
        &:first-of-type
          font-size 20px
  >.active
    z-index 2

.welcome
  >h1,>p
    text-align center
  >h1
    font-size 48px
    margin 80px 0
  >.fe__info
    width 690px
    margin 60px auto 0

.work__experience
  >h1
    text-align center
    margin 40px 0
  >.content
    display flex
    flex-flow row wrap
    justify-content space-between
    >.card
      width 528px
      height 210px
      padding 0 10px
      background-color #fff
      border-radius 6px
      color #333
      margin-bottom 15px
      >h2
        font-size 16px
      >p
        font-size 14px
        margin 0
.project__experience
  >h1
    text-align center
    margin 40px 0
  >.content
    display flex
    flex-flow row wrap
    justify-content space-between
    >.card
      width 528px
      height 210px
      padding 0 10px
      background-color #fff
      border-radius 6px
      color #333
      margin-bottom 15px
      >h3
        padding-left 10px
        font-size 16px
        border-left 5px solid #039be5
        >span
          padding 0 8px
          font-size 12px
          font-weight normal
          color #999
          margin-left 10px
          border 1px solid #eee
          border-radius 20px
      >p
        margin-top 0
        font-size 14px
      >i
        color #999

.individual__project
  >h1
    text-align center
    margin 40px 0
  >.content
    display flex
    flex-flow row wrap
    justify-content space-between
    >.card
      width 528px
      height 410px
      padding 0 10px
      background-color #fff
      border-radius 6px
      color #333
      margin-bottom 15px
      >h3
        padding-left 10px
        font-size 16px
        border-left 5px solid #039be5
      >p
        margin-top 0
        font-size 14px
      >.last_time
        position relative
        &:after
          display inline-block
          content ' '
          width 125px
          height 125px
          position absolute
          left 50px
          background url("./../assets/images/last_time_mp_code.jpg") no-repeat
          background-size cover
          border 5px solid #fff
          border-radius 6px
      >.light_bill
        position relative
        &:after
          display inline-block
          content ' '
          width 125px
          height 125px
          position absolute
          left 50px
          background url("./../assets/images/light_bill_mp_code.jpg") no-repeat
          background-size cover
          border 5px solid #fff
          border-radius 6px
      >i
        color #999

.base__info
  >h1
    margin 40px 0 200px
  >h1,>p
    text-align center
  >p
    width 590px
    margin 0 auto 50px
  >ul
    width 320px
    margin 0 auto
    >.info__item
      line-height 38px
      background-repeat no-repeat
      background-size contain
      padding-left 50px
      margin 10px 0
      &:nth-child(1)
        background-image url("./../assets/icons/youxiang.png")
      &:nth-child(2)
        background-image url("./../assets/icons/dizhi.png")
      &:nth-child(3)
        background-image url("./../assets/icons/shuye.png")
      &:nth-child(4)
        background-image url("./../assets/icons/wechat.png")
        position relative
        &:after
          display inline-block
          content ' '
          width 125px
          height 125px
          position absolute
          left 50px
          background url("./../assets/images/wechat.jpg") no-repeat
          background-size cover
          border 5px solid #fff
          border-radius 6px
footer
  width 100%
  position absolute
  bottom 0px

</style>
