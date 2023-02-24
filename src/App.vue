<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useCounterStore } from "./stores/counter";

    const counterStore = useCounterStore();
    const { count } = storeToRefs(counterStore);
    const { decrement, increment } = counterStore;
</script>

<template>
    <main>
        <div class="container">
            <div>
                <h2>Counter</h2>
                <div>
                    <h1>{{ count }}</h1>
                </div>
                <van-space direction="horizontal">
                    <van-button icon="minus" type="danger" @click="decrement()" />
                    <van-button icon="plus" type="success" @click="increment()" />
                </van-space>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        display: flex;
        flex-wrap: wrap;
        background-color: black;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(255, 255, 255, 0.1);
        height: 30%;
        width: 60%;
        border-radius: 30px;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        color: white;
    }

    h2 {
        color: white;
    }

    h3 {
        color: white;
    }
</style>
