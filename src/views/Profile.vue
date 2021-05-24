<template>
  <div>
    <NavBar nomeTela="Perfil"/>
    <Content />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Content from '@/components/profile/Content.vue'
export default {
  components: {
    NavBar,
    Content
  }
}
</script>

<style>

</style>
