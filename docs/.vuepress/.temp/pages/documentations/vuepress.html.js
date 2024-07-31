import comp from "/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/documentations/vuepress.html.vue"
const data = JSON.parse("{\"path\":\"/documentations/vuepress.html\",\"title\":\"Vuepress\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"documentations/vuepress.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
