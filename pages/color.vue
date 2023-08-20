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
</style>