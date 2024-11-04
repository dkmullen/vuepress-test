<template>
    <div ref="editor"></div>
</template>

<script>
import Quill from 'quill';

export default {
  data() {
    return {};
  },
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      theme: 'snow', // You can use 'bubble' for a simpler editor
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
      },
    });
  },
  methods: {
    doSubmit() {
      this.$emit('richText', this.quill.root.innerHTML)
    },
    doCancel() {
      this.quill.root.innerHTML = '<p><br></p>'
    }
  },
};
</script>

<style>
@import 'quill/dist/quill.snow.css'; /* Include Quill's styles */

/* Set colors with vars to allow light/dark display */
.ql-picker-label {
  color: var(--vp-c-text);
}
.ql-snow .ql-stroke {
  stroke: var(--vp-c-text);

}
</style>
