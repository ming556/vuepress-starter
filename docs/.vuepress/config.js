module.exports = {
    title:'一个小菜鸟的自我修养',
    description: '专注 前端 技术栈分享',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/login.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
      //增加manifest.json
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    base:'/docs/',
    themeConfig:{
        nav: [{text: "主页", link: "/"},
            { text: "node", link: "/node/" },
            { text: "前端", 
                items:[
                    { text: "html", link:"/web/html/"},
                    { text: "css", link:"/web/css/"},
                    { text: "js", link:"/web/js/"},
                ]
            },
            { text: "VUE", link: "/VUE/" },
            { text: "面试问题", link: "/interview/" },
            { text: "GitHub", link: "https://github.com/ming556/vuepress-starter" }
          ],
          sidebar:{
            "/VUE/":[
              ["", "目录"],
              {
                title: 'ES6',
                children: [
<<<<<<< HEAD
                  { title: '在vue中关于es6的使用', path:'ES6/vue-es6'},
                  { title: '高频的关于es6的面试题', path:'ES6/es6-interview'}
=======
                  { title: '在vue中关于es6的使用', path:'ES6/vue-es6/'},
                  { title: '高频的关于es6的面试题', path:'ES6/es6-interview/'}
>>>>>>> 59b49212643bb98873051de60f380e8bc3462445
                ]
              },
              {
                title: 'vue的生命周期以及vuex',
                children: [
                  { title: 'vuex的生命周期', path:'vuex/vuex'},
                  { title: '一些高频的关于vuex的问题', path:'vuex/vuex-interview'},
                ]
              },
              {
                title: 'VUE中vue-router的使用',
                children: [
                  { title: 'vue-router路由守卫', path:'vue-router/vue-router'},
                  { title: 'vue-router中路由镶嵌', path:'vue-router/vue-children'}
                ]
              },
            ],
            "/interview/":[
              ["", "目录"],
            ],
          }
        // sidebar: 'auto',
      },
      plugins:[
          {
              name:"page-plugin",
              globalUIComponents:["fixed"]
          },
          '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
          }
          ["@vuepress/back-to-top"], // 返回顶部
          ["@vuepress/nprogress"],   // 加载进度条
          [
            'vuepress-plugin-comment',
            {
              choosen: 'valine', 
              // options选项中的所有参数，会传给Valine的配置
              options: {
                el: '#valine-vuepress-comment',
                appId: 'GWPbOewGubpBy5AwaEdjJFyl-gzGzoHsz',
                appKey: 'ByHseupjcxjCPGH0HaKoRPff',
                avatar:'wavatar',
                emojiCDN: 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/',
              }
            }
          ]
      ]
      
}
