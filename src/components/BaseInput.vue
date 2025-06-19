<template>
  <label :for="uuid">{{ props.label }}</label>
  <input 
    v-bind="$attrs"
    :placeholder="props.label" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field" 
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  >
  <p 
    v-if="error" 
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  > 
    {{ error }}
  </p>
</template>

<script setup>
  import { defineProps } from 'vue';
  import UniqueID from '@/features/UniquedID';
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  })

  const uuid = UniqueID().getID()
</script>