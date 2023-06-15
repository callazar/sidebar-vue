<template>
  <div class="input-warp">
    <label>{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <p>{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.input-warp {
  display: flex;
  flex-direction: column;

  input {
    padding: 8px 12px;
    font-size: 16px;
  }
}
</style>