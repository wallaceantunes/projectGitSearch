<template>
  <div>
    <NavBar nomeTela="Perfil"/>
    <Header />
    <Content />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/profile/Header.vue'
import Content from '@/components/profile/Content.vue'
export default {
  components: {
    NavBar,
    Header,
    Content
  }
}
</script>

<style>

</style>
