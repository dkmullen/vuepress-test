import comp from "/home/dkm/projects/vuepress-test/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"My Page with Quill Editor\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"My Page with Quill Editor\"},\"headers\":[],\"git\":{\"updatedTime\":1730558761000,\"contributors\":[{\"name\":\"Dennis Mullen\",\"email\":\"dkmullen@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"test.md\"}")
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
