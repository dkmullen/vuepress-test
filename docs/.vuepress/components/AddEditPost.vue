<template>
  <div>
    <form @submit.prevent="onSubmit" ref="form">
      <div>
        <SelectView id="post-type" label="Type of post" :items="postTypes" v-model="formData.postType" @emitNew="updateType"/>
      </div>
      <RichTextEditor ref="editor" @richText="updatePostData"/>
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

<script setup>
import { ref, reactive} from 'vue'
import ButtonView from './ButtonView.vue';
import SelectView from './SelectView.vue';
import DialogView from './DialogView.vue';
import RichTextEditor from './RichTextEditor.vue';

const showCancelDialog = ref(false)
const editor = ref()
const formData = reactive({
  postType: 'notice',
  currentUser: 'Dennis',
  updateTo: null,
  postData: null,
  timestamp: null,
})
const postTypes = [
  { value: 'notice', label: 'NOTICE' },
  { value: 'update', label: 'Update to a notice' },
]

function onSubmit() {
  editor.value.doSubmit();
  formData.timestamp = Date.now();
  console.log(formData);
}
function doCancel() {
  editor.value.doCancel();
  formData.postType = 'notice'
  formData.postData = null
  console.log(formData)
  showCancelDialog.value = false

}
function updateType(e) {
  formData.postType = e;
}
function updatePostData(text) {
  formData.postData = text;
}
  

</script>

<style>
.button-row {
  text-align: center;
  margin-top: 1rem;
}
</style>
