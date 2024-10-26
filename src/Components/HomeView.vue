<template>
    <h2>HomeView</h2>
    <button @click="gotoAbout">Ver el Acerca</button>
  </template>


<script lang="ts">
export default {
    methods: {
        gotoAbout() {
            this.$router.push('/about');
        }
    }
}
</script>



