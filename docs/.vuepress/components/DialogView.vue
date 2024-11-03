<script setup>
import { ref } from 'vue';
import ButtonView from './ButtonView.vue';

const emit = defineEmits(['closeDialog', 'doAction'])

const message = ref('Are you sure you want to quit editing? (All unsaved data will be lost)')
</script>
<template>
    <div id="overlay"></div>
    <div id="dialog-card">
        <div class="dialog-message center">{{ message }}</div>
        <div class="button-row">
        <ButtonView
          ref="cancelBtn"
          class="btn btn-secondary"
          @click="emit('closeDialog')"
          label="Continue Editing"
        />
        <ButtonView
          ref="submitBtn"
          class="btn btn-primary"
          @click="emit('doAction')"
          label="Quit Editing and Reset Form"
        />
      </div>
    </div>
</template>

<style>
#overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 9998;
}
#dialog-card {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: var(--vp-c-bg);
    padding: 2rem;
    z-index: 9999;
}
.center {
    text-align: center;
}
</style>