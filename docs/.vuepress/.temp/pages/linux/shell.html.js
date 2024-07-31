import comp from "/home/celso/Devel/projects/oregon/my-docs/docs/.vuepress/.temp/pages/linux/shell.html.vue"
const data = JSON.parse("{\"path\":\"/linux/shell.html\",\"title\":\"Shell\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"sh\",\"slug\":\"sh\",\"link\":\"#sh\",\"children\":[]},{\"level\":2,\"title\":\"bash\",\"slug\":\"bash\",\"link\":\"#bash\",\"children\":[]},{\"level\":2,\"title\":\"zsh\",\"slug\":\"zsh\",\"link\":\"#zsh\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"linux/shell.md\"}")
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
