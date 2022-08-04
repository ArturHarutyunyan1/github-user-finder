<template>
  <div class="container">
    <main>
      <Search />
      <Details />
    </main>
  </div>
</template>
<script>
import Search from './components/Search.vue'
import Details from './components/Details.vue'
export default {
    components: { Search, Details },
    data(){
      return{}
    }
}
</script>
<style>
  @import './assets/main.css';
</style>