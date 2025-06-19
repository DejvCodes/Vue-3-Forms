<template>
  <input 
    type="radio" 
    :checked="modelValue === value"
    :value="value" 
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
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
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    }
  })
</script>