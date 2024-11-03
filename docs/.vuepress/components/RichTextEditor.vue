<template>
  <div>
    <form @submit.prevent="onSubmit" ref="form">
      <div>
        <SelectView id="post-type" label="Type of post" :items="postTypes" v-model="formData.postType" @emitNew="updateType"/>
      </div>
      <div ref="editor"></div>
      <div class="button-row">
        <ButtonView
          ref="cancelBtn"
          class="btn btn-secondary"
          @click="showCancelDialog = true"
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
  <DialogView v-if="showCancelDialog" ref="cancelDialog" @doAction="doCancel" @closeDialog="showCancelDialog = false" />
</template>

<script>
import Quill from 'quill';
import ButtonView from './ButtonView.vue';
import SelectView from './SelectView.vue';
import DialogView from './DialogView.vue';

export default {
  props: {
    editorType: { type: String, default: 'notice' },
  },
  components: { ButtonView, SelectView, DialogView },
  data() {
    return {
      valid: false,
      showCancelDialog: false,
      formData: {
        postType: 'notice',
        currentUser: 'Dennis',
        updateTo: null,
        postData: null,
        timestamp: null,
      },
      postTypes: [
        { value: 'notice', label: 'NOTICE' },
        { value: 'update', label: 'Update to a notice' },
      ]
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
    doCancel() {
      this.formData.postType = 'notice'
      this.quill.root.innerHTML = '<p><br></p>'
      console.log(this.formData)
      this.showCancelDialog = false

    },
    updateType(e) {
      this.formData.postType = e;
    }
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
