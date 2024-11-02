<template><div><h1 id="my-page" tabindex="-1"><a class="header-anchor" href="#my-page"><span>My Page</span></a></h1>
<p>Below is a rich text editor for user input:</p>
<RichTextEditor editorType="notice" /></div></template>

<script>
import RichTextEditor from '/.vuepress/components/RichTextEditor.vue';

export default {
  components: {
    RichTextEditor,
  },
};
</script>
