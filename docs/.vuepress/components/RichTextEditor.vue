<template>
  <div>
    <form @submit.prevent="onSubmit" ref="form">
      <div>
        <label for="post-type-select">Type of post</label><br />
        <select
          name="post-type"
          id="post-type-select"
          v-model="formData.postType"
        >
          <option value="notice">NOTICE</option>
          <option value="update">Update to a notice</option>
        </select>
      </div>
      <div ref="editor"></div>
      <div class="button-row">
        <ButtonView
          ref="cancelBtn"
          class="btn btn-secondary"
          @click="onCancel"
          label="Cancel"
        />
        <ButtonView
          ref="submitBtn"
          type="submit"
          class="btn btn-primary"
          label="Save"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Quill from 'quill';
import ButtonView from './ButtonView.vue';

export default {
  props: {
    editorType: { type: String, default: 'notice' },
  },
  components: { ButtonView },
  data() {
    return {
      valid: false,
      formData: {
        postType: 'NOTICE',
        currentUser: 'Dennis',
        updateTo: null,
        postData: null,
        timestamp: null,
      },
    };
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
    onSubmit() {
      this.formData.postData = this.quill.root.innerHTML;
      this.formData.timestamp = Date.now();
      console.log(this.formData);
    },
    onCancel() {
      console.log('You sure about that?');
    },
  },
};
</script>

<style>
@import 'quill/dist/quill.snow.css'; /* Include Quill's styles */
.button-row {
  text-align: center;
  margin-top: 1rem;
}
</style>
