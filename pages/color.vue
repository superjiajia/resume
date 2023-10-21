<template>
  <div class="color">
    <ul>
      <li>#ff4444</li>
      <li>#ffd600</li>
      <li>#00a862</li>
      <li>#039be5</li>
      <li>#002fa7</li>
      <li>#008c8c</li>
      <li>#e85827</li>
      <li>#003153</li>
      <li>#81d8d0</li>
      <li>#800020</li>
      <li>#4c0009</li>
      <li>#f9dc24</li>
      <li>#b05923</li>
    </ul>
    <div class="dark-mode">
      <dl class="light">
        <dt>Light</dt>
        <dd>Red,500 #e5353e</dd>
        <dd>Red,300 #ff6f75</dd>
        <dd>Red,50 #ffe6e7</dd>
        <dd>Blue,500 #3666f4</dd>
        <dd>Blue,300 #7697f8</dd>
        <dd>Blue,50 #d7e1fd</dd>
        <dd>#287dfa</dd>
        <dd>#ffb400</dd>
        <dd>#ff6f00</dd>
        <dd>#ee3b28</dd>
        <dd>#06aebd</dd>
        <dd>#0f294d</dd>
        <dd>#455873</dd>
        <dd>#8592a6</dd>
        <dd>#acb4bf</dd>
      </dl>
      <dl class="dark">
        <dt>Dark</dt>
        <dd>Red,400 #ff4d55</dd>
        <dd>Red,500 Alpha.48% rgba(229, 53, 62, .48)</dd>
        <dd>Red,500 Alpha.16% rgba(229, 53, 62, .16)</dd>
        <dd>Blue,400 #567ff6</dd>
        <dd>Blue,500 Alpha.48% rgba(54, 102, 244, .48)</dd>
        <dd>Blue,500 Alpha.16% rgba(54, 102, 244, .16)</dd>
        <dd>#7eb0fc</dd>
        <dd>#ffd266</dd>
        <dd>#ffa866</dd>
        <dd>#f37668</dd>
        <dd>#50c6d0</dd>
        <dd>#ffffff</dd>
        <dd>#b8c4d4</dd>
        <dd>#99a6ba</dd>
        <dd>#5c697c</dd>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.color
  width 1200px
  padding-top 80px
  margin 0 auto
  >ul
    display flex
    justify-content space-between
    flex-flow row wrap
    >li
      width 300px
      height 100px
      color #fff
      text-align center
      line-height 100px
      border-radius 8px
      margin-bottom 30px
      &:nth-child(1)
        background-color #ff4444
      &:nth-child(2)
        color #333
        background-color #ffd600
      &:nth-child(3)
        background-color #00a862
      &:nth-child(4)
        background-color #039be5
      &:nth-child(5)
        background-color #002fa7
      &:nth-child(6)
        background-color #008c8c
      &:nth-child(7)
        background-color #e85827
      &:nth-child(8)
        background-color #003153
      &:nth-child(9)
        background-color #81d8d0
      &:nth-child(10)
        background-color #800020
      &:nth-child(11)
        background-color #4c0009
      &:nth-child(12)
        color #333
        background-color #f9dc24
      &:nth-child(13)
        background-color #b05923
  >.dark-mode
    display flex
    justify-content space-around
    >dl.light
      width 360px
      box-sizing border-box
      padding 0 30px
      border-radius 8px
      background-color #fff
      box-shadow 0 0 10px 0px rgba(0,0,0,.1)
      >dt
        text-align center
        line-height 50px
        color #000
        font-weight 700
      >dd
        width 300px
        height 100px
        color #fff
        font-size 14px
        text-align center
        line-height 100px
        border-radius 8px
        margin-left 0
        margin-bottom 20px
        &:nth-child(2)
          background-color #e5353e
        &:nth-child(3)
          background-color #ff6f75
        &:nth-child(4)
          background-color #ffe6e7
        &:nth-child(5)
          background-color #3666f4
        &:nth-child(6)
          background-color #7697f8
        &:nth-child(7)
          background-color #d7e1fd
        &:nth-child(8)
          background-color #287dfa
        &:nth-child(9)
          background-color #ffb400
        &:nth-child(10)
          background-color #ff6f00
        &:nth-child(11)
          background-color #ee3b28
        &:nth-child(12)
          background-color #06aebd
        &:nth-child(13)
          background-color #0f294d
        &:nth-child(14)
          background-color #455873
        &:nth-child(15)
          background-color #8592a6
        &:nth-child(16)
          background-color #acb4bf
    >dl.dark
      width 360px
      box-sizing border-box
      padding 0 30px
      border-radius 8px
      background-color #000
      box-shadow 0 0 10px 0px rgba(0,0,0,.1)
      >dt
        text-align center
        line-height 50px
        color #fff
        font-weight 700
      >dd
        width 300px
        height 100px
        color #fff
        font-size 14px
        text-align center
        line-height 100px
        border-radius 8px
        margin-left 0
        margin-bottom 20px
        &:nth-child(2)
          background-color #ff4d55
        &:nth-child(3)
          background-color rgba(229, 53, 62, .48)
        &:nth-child(4)
          background-color rgba(229, 53, 62, .16)
        &:nth-child(5)
          background-color #567ff6
        &:nth-child(6)
          background-color rgba(54, 102, 244, .48)
        &:nth-child(7)
          background-color rgba(54, 102, 244, .16)
        &:nth-child(8)
          background-color #7eb0fc
        &:nth-child(9)
          background-color #ffd266
        &:nth-child(10)
          background-color #ffa866
        &:nth-child(11)
          background-color #f37668
        &:nth-child(12)
          background-color #50c6d0
        &:nth-child(13)
          background-color #ffffff
        &:nth-child(14)
          background-color #b8c4d4
        &:nth-child(15)
          background-color #99a6ba
        &:nth-child(16)
          background-color #5c697c
</style>