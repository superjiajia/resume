import GDemo from '@glorious/demo'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.GDemo = GDemo
})
