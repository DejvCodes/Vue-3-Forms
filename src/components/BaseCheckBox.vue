<template>
  <input 
    type="checkbox" 
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field" 
  />
  <label v-if="props.label">{{ props.label }}</label>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      defailt: false
    }
  })
</script>