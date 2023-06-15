<template>
  <main class="contact-page">
    <h1>Contact</h1>
    <p>contact me and let's collaborate together</p>
    <contactMe />
    <textarea name="" id="" placeholder="Your Comment"></textarea>
    <button class="btn-submit" @click="onsubmit">SUBMIT</button>
  </main>
</template>

<script setup>
import contactMe from "../components/contactMe.vue";

const onsubmit = () => {
  alert("you right");
};
</script>

<style lang="scss" scoped>
textarea {
    padding: 10px;
    width: 915px;
    height: 185px;
}

@media (max-width: 768px) {
  textarea {
    width: 283px;
    height: 185px;
  }
}

.btn-submit {
  background-color: rgb(0, 72, 72);
  padding: 13px;
  margin-top: 15px;
  border-radius: 7px;
  color: aliceblue;
}
</style>
