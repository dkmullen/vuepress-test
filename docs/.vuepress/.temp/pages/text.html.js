import comp from "/Users/dennis.mullen/vuepress-starter/docs/.vuepress/.temp/pages/text.html.vue"
const data = JSON.parse("{\"path\":\"/text.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"text.md\"}")
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
