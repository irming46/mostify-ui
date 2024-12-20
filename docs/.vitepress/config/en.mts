export default {
  title: "Mostify UI a Vue3 UI component library",
  description: "Mostify UI a Vue3 UI component library that provides exquisite UI components",
  themeConfig: {
    

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Start', link: '/config/start' },
      { text: 'Components', link: '/bases/button' }
    ],

    sidebar: [
      {
        text: 'Settings',
        items: [
          { text: 'Get Start', link: '/config/start' },
          { text: 'Theme Setting', link: '/config/theme' },
        ]
      },
      {
        text: 'Components',

        items: [
          {
            text: 'Bases',
            items: [
              { text: 'Button', link: '/bases/button' },
              { text: 'Icon', link: '/bases/icon' },
              { text: 'Colors', link: '/bases/colors' },
            ]
          },
          {
            text: 'Forms',
            items: [
              { text: 'Input', link: '/form/input' },
            ]
          },
          {
            text: 'Data',
            items: [
              { text: 'Button', link: '/' },
            ]
          },
          {
            text: 'Feedback',
            items: [
              { text: 'Dialog', link: '/feedback/dialog' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irming46/mostify-ui' }
    ],

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Irming'
    }
  }
}
