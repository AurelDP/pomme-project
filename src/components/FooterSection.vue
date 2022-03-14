<template>
  <footer class="d-flex justify-content-center p-3 fw-bold bg-light">
    <p class="m-0">{{ footerText }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      footerText: "© 2022 Copyright: pomme.com"
    }
  }
}
</script>

<style scoped>

</style>