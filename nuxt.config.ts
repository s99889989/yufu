// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '愈富環保企業社',
      meta: [
        { name: 'description', content: '愈富環保企業社' },
        { name: 'og:title', content: '愈富環保企業社' },
        { name: 'og:description', content: '愈富環保企業社' },
        { name: 'og:image', content: '/favicon.png' },

      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
          crossorigin: "anonymous",
        }
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/168d3a888b.js",
          crossorigin: "anonymous"
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          crossorigin: "anonymous",
          integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
        },
      ]
    }
  }
})
