<template>
  <label v-if="label">{{ props.label }}</label>
  <select 
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value)}
    }"
  > 
    <option 
      v-for="option in options" 
      :value="option" 
      >{{ option }}
    </option>
  </select>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  })
</script>