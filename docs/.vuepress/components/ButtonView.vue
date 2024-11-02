<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    default: 'button',
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <button :type="buttonType">
    {{ props.label }}
  </button>
</template>

<style>
.btn-primary {
  background-color: #1c4d8c;
  color: white;
}
.btn-secondary {
  background-color: #75787b;
  color: white;
}
.btn {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid;
  margin: 4px;
  min-width: 80px;
}
.btn:hover {
  opacity: 0.8;
}
</style>
