<script setup lang="ts">
    import { RouterView } from "vue-router";
</script>

<template>
    <div class="conatiner">
        <RouterView />
    </div>
</template>

<style scoped>
    .container {
        max-width: 1000px;
        margin: 0 auto;
        align-items: center;
    }
</style>
