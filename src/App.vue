<script setup lang="ts">
    import q from "./data/quizes.json";
    import { ref, watch } from "vue";
    
    const quizes = ref(q);
    const search = ref("");
    
    watch(search, () => {
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    });
</script>

<template>
    <div class="container">
            <header>
                <h1>Quizes</h1>
                <input type="text" placeholder="Search..." v-model.trim="search" />
            </header>
        <div class="cards-container">
            <div class="card" v-for="quiz in quizes" :key="quiz.id">
                <img alt="" :src="quiz.img" />
                <div class="card-text">
                    <h2>{{ quiz.name }}</h2>
                    <p>{{ quiz.questions.length }} questions</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        max-width: 1000px;
        margin: 0 auto;
        align-items: center;
    }
    
    header {
        margin-bottom: 10px;
        margin-top: 30px;
        display: flex;
    }
    
    header h1 {
        font-weight: bold;
        margin-right: 50px;
    }
    
    header input {
        border: none;
        background-color: rgba(128, 128, 128, 0.1);
        padding: 10px;
        border-radius: 10px;
    }
    
    /* CARD */
    .cards-container {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    
    .card {
        width: 300px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 35px;
        margin-right: 20px;
        cursor: pointer;
    }
    
    .card img {
        width: 100%;
        height: 150px;
        margin: 0;
    }
    
    .card .card-text {
        padding: 0 5px;
    }
    
    .card .card-text h2 {
        font-weight: bold;
    }
</style>
