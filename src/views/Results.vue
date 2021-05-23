<template>
  <div>
    <NavBar nomeTela="Lista de Usuários"/>
    <CardResults />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CardResults from '@/components/result/CardResults.vue'
export default {
  components: {
    NavBar,
    CardResults
  }
}
</script>
