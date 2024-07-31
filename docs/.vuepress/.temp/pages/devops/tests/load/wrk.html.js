import comp from "/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/devops/tests/load/wrk.html.vue"
const data = JSON.parse("{\"path\":\"/devops/tests/load/wrk.html\",\"title\":\"Wrk\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"devops/tests/load/wrk.md\"}")
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
