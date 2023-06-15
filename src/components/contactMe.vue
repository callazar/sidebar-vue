<template>
  <div class="input-warp">
    <baseInput
      v-model="firstName"
      type="text"
      placeholder="firstname"
      class="name-class"
    />

    <baseInput
      v-model="lastName"
      type="text"
      placeholder="lastname"
      class="name-class"
    />

    <baseInput
      v-model="email"
      type="email"
      placeholder="Email"
      class="name-class"
    />
  </div>
</template>

<script setup>
import baseInput from "./custome/baseInput.vue";
import { ref } from "vue";

const firstName = ref("");
</script>

<style lang="scss" scoped>
.input-warp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .input-warp{
    display: flex;
    flex-direction: column;
  }  
}
</style>
