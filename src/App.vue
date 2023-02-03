<script setup lang="ts">
    import { ref } from "vue";
    const count = ref(0);
    const addToCount = () => {
        count.value++;
    };
    const subtractFromCount = () => {
        count.value--;
    };
</script>

<template>
    <main>
        <div>
            <h2>Counter</h2>
            <h1>{{ count }}</h1>
            <button @click="subtractFromCount()">-</button>
            <button @click="addToCount()">+</button>
        </div>
    </main>
</template>

<style scoped>
    main {
        background-color: aliceblue;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    div {
        text-align: center;
    }
</style>
