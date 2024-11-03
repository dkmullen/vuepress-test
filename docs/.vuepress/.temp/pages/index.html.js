import comp from "/home/dkm/projects/vuepress-test/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Add/Edit a Post\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Add/Edit a Post\"},\"headers\":[],\"git\":{\"updatedTime\":1730558761000,\"contributors\":[{\"name\":\"Dennis Mullen\",\"email\":\"dkmullen@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
