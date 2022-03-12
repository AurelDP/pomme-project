<template>
  <footer class="d-flex justify-content-center p-3 fw-bold bg-light">
    <p class="m-0">{{ txt }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    txt: String,
  }
}
</script>

<style scoped>

</style>