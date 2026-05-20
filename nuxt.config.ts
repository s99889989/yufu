// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: '愈富環保企業社',
      meta: [
        { name: 'description', content: '台東合法認證，專業水肥清潔服務。合法持照・專業施作・服務台東地區抽水肥・水刀通管・化糞池菌種馴養。電話：0905-537307' },
        { name: 'og:title', content: '愈富環保企業社' },
        { name: 'og:description', content: '台東合法認證，專業水肥清潔服務。合法持照・專業施作・服務台東地區抽水肥・水刀通管・化糞池菌種馴養。電話：0905-537307' },
        { name: 'og:image', content: 'https://yufuenv.netlify.app/favicon.png' },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&display=swap",
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