<script lang="ts" setup>
const { data } = await useFetch('/api/hello')
</script>
<template>
<!-- <AboutHeader /> -->
 <Box />
  <div>
     <h1>關於頁</h1>
      {{ data }}
  </div>

<!-- <AboutFooter /> -->
</template>

<style scoped></style>
