// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/app.styl'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'rotate', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: "🎉Wang Jia's front-end resume",
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'content-type', content: 'text/html;charset=utf-8' },
        { ['http-equiv']: 'x-ua-compatible', content: 'ie=edge,chrome=1' },
        { name: 'description', content: 'web前端简历,前端工程师简历,前端开发简历,Vue开发,React开发,小程序开发,Electron开发' }
      ],
      link: [
        { rel: 'shortcut icon', href: 'favicon.ico', type: 'image/x-icon'}
      ]
    }
  },
  plugins: [
    { src: '~/plugins/glorious-demo.client.ts', mode: 'client' },
    // { src: '~/plugins/particles.client.ts', mode: 'client' }
  ]
})
