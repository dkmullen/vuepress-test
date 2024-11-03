<script setup>

const props = defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  items: {
    type: Array
  },
});

const emit = defineEmits(['emitNew'])

function emitNew(e) {
emit ('emitNew', e.target.value)
}
</script>

<template>
    <div>
        <label :for="id">{{ label }}</label><br />
        <select
          :id="id"
          class="form-select"
          :onchange="emitNew"
        >
          <option v-for="item in items" :key="item.value" :value="item.value" :selected="item.selected">{{ item.label }}</option>
        </select>
      </div>
</template>

<style>
.form-select {
    padding: 8px;
    min-width: 200px;
    margin-bottom: 1rem;
}
</style>