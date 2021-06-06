import React, { useState, useEffect } from 'react'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'
import '@glorious/demo/dist/gdemo.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import GDemo from '@glorious/demo'
import Prism from 'prismjs'
import './fullpage.styl'

let doc = document
let activeIndex = 0
let iHeight = window.innerHeight
let scrollState = false

const Fullpage = () => {
  const [active, setActive] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  function scrollPage(e) {
    if (!scrollState) {
      scrollState = true
      if (e.deltaY > 0) { // Down
        if (activeIndex < 3) {
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
      batchedUpdates(() => {
        setActive(activeIndex)
        setInnerHeight(-activeIndex * iHeight)
      })
    }
  }

  function scrollEnd() {
    scrollState = false
  }

  function bindScroll() {
    doc.querySelector('#fullpage').addEventListener('wheel', (e) => {
      e.preventDefault()
      scrollPage(e)
    }, { passive: false })
    doc.querySelector('#fullpage').addEventListener('touchmove', (e) => {
      e.preventDefault()
      scrollPage(e)
    }, { passive: false })
  }

  function unbindScroll() {
    doc.querySelector('#fullpage').removeEventListener('wheel', (e) => {
      e.preventDefault()
      scrollPage(e)
    }, { passive: false })
    doc.querySelector('#fullpage').removeEventListener('touchmove', (e) => {
      e.preventDefault()
      scrollPage(e)
    }, { passive: false })
  }

  function initTerminal() {
    let terminal = new GDemo('#fe__info')
    const code = `
function wantToKnowMore(){
  console.log("Ok, Let's Go.");
}

wantToKnowMore();
`
    const highlightCode = Prism.highlight(code, Prism.languages.javascript, 'javascript')

    terminal
      .openApp('editor', { minHeight: '350px', windowTitle: 'resume.js' })
      .write(highlightCode, { onCompleteDelay: 500 })
      .openApp('terminal', { minHeight: '350px', promptString: '$' })
      .command('node ./resume', { onCompleteDelay: 500 })
      .respond('我会做什么:')
      .respond('1 - 熟练掌握HTML5、CSS3、JavaScript、MongoDB等语言')
      .respond('2 - 日常主要以React技术栈/Vue技术栈开发应用')
      .respond('3 - 深知代码的健壮性、可扩展性、可维护性；和丰富的用户体验认知')
      .respond('4 - 保持一个乐观和积极向上的心态去学习，时刻关注前端前沿技术发展')
      .respond('别忘记向下滑动噢～')
      .command('')
      .end();
  }

  useEffect(() => {
    bindScroll()
    initTerminal()
    return () => {
      unbindScroll()
    }
  }, [])

  return (
    <div className="fullpage" style={{ transform: `translateY(${innerHeight}px)` }} id="fullpage" onTransitionEnd={scrollEnd}>
      <div className={`fullpage__item ${active === 0 ? 'active' : ''}`}>
        <div className="item__box welcome">
          <h1>Hey, I'm WangJia.</h1>
          <p>前端届的小学生</p>
          <p>"江山父老能容我，不使人间造孽钱"</p>
          <div className="fe__info" id="fe__info"></div>
        </div>
      </div>
      <div className={`fullpage__item ${active === 1 ? 'active' : ''}`}>
        <div className="item__box">
          <div className="work__experience">
            <h1> - 工作经历 - </h1>
            <h2>联发科技（合肥）有限公司 OD岗</h2>
            <sub>2018-12 ~ 至今</sub>
            <p>1 - 工作期间担任Linux TV Teams主要开发人员，负责TV web项目的前端开发;</p>
            <p>2 - 主要以原生JavaScript作为开发语言，以stylus作为css预处理器来开发项目；</p>
            <p>3 - 利用WebSocket来解决前后端数据的传递，及消息推送；</p>
            <p>4 - 使用i18n实现国际化支持；</p>
            <p>5 - 通过gulp+rollup编译运行项目，最终并将项目前后端分离部署在TV Browser上；</p>
            <p>6 - 解决Teams内项目难点，帮助其他同事解决分析问题及Review小组内成员Code；</p>
            <h2>安徽百得思维信息科技有限公司</h2>
            <sub>2018-3 ~ 2018-12</sub>
            <p>1 - 工作期间担任讯飞云计算研究院AI平台研发线主要开发人员，负责AI研发线web项目的前端开发;</p>
            <p>2 - 主要以vue作为日常开发框架，以sass作为css预处理器来构建项目；</p>
            <p>3 - 使用vue-router模块化配置组件并解决组件之间的跳转；</p>
            <p>4 - 使用vuex来解决组件之间复杂的状态管理；</p>
            <p>5 - 通过axios库及nginx反向代理来解决前后端数据的传递，及跨域问题；</p>
            <p>6 - 通过webpack编译运行项目，最终并将项目前后端分离部署在服务器上；</p>
          </div>
        </div>
      </div>
      <div className={`fullpage__item ${active === 2 ? 'active' : ''}`}>
        <div className="item__box">
          <div className="project__experience">
            <h1> - 项目经历 - </h1>
            <h3>MulitMediaPlayer</h3>
            <p>MulitMediaPlayer属于MHF Linux TV Project重点项目之一，主要设计用于图片、音乐和视频播放，它支持几乎所有主流的文件格式，并支持以移动硬盘和DLNA访问。</p>

            <h3>讯飞云-服务编排</h3>
            <p>属于集团讯飞云核心模块之一；主要作用：将传统单点AI能力进行可视化组合编排，提供serverless免运维服务调用，降低开发者使用门槛，提升开发效率。</p>

            <h3>讯飞云-计量授权</h3>
            <p>属于集团讯飞云运营管理后台AI模块；主要作用：管理线上AI能力及其受限资源，为APPID进行授权，包括：受限资源的时授、量授、流控授权。</p>

            <h3>讯飞云-配置中心</h3>
            <p>属于集团讯飞云核心模块之一；主要作用：在分布式架构环境中对应用配置进行集中管理和推送、对服务版本及生产者和消费者的调用策略进行管理。</p>

            <h3>讯飞云-引擎平台</h3>
            <p>属于集团讯飞云核心模块之一；主要作用：解决AI能力引擎上线效率问题，各引擎服务化快速集成、迭代，统一服务架构，不需要再针对各引擎分别进行封装，统一调用方式，提供统一的调用接口，方便开发AI能力，促使AI能力现网运行透明化。</p>

            <h3>讯飞云-AI运营平台</h3>
            <p>属于集团讯飞云运营管理后台AI模块；主要作用：展示线上AI能力的相关使用数据，为产品决策和问题排查提供数据支撑。</p>
            <i>为什么没有项目link：MulitMediaPlayer目前还在第二轮测试中，还没有量产，且客户主要在欧洲，后面我会录一个视频用于展示；讯飞云模块为集团对内项目，外网无法访问。</i>
          </div>
        </div>
      </div>
      <div className={`fullpage__item ${active === 3 ? 'active' : ''}`}>
        <div className="item__box">
          <div className="base__info">
            <h1> - 关于我 - </h1>
            <p>这可能是你看过的最朴素无华的简历，但这并不能淹没一个前端人求“入坑”的心  -- 大道至简</p>
            <ul>
              <li className="info__item">wangjia125513819@gmail.com</li>
              <li className="info__item">安徽 合肥</li>
              <li className="info__item">1993/03</li>
              <li className="info__item">WeChat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fullpage
