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
            <van-space>
                <van-button icon="plus" type="success" @click="addToCount()" />
                <van-button icon="minus" type="danger" @click="subtractFromCount()" />
            </van-space>
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
        text-align: center;
    }
</style>
