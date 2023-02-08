<script setup lang="ts">
    import { defineProps } from "vue";
    import { RouterLink } from "vue-router";

    const { numberOfCorrectAnswers, quizQuestionLength } = defineProps(["numberOfCorrectAnswers", "quizQuestionLength"]);
</script>

<template>
    <div class="results">
        <p>Your results...</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
        <div class="homebutton">
            <RouterLink to="/">
                <p>Go Home</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 25px;
    }

    h1 {
        font-size: 80px;
    }

    .homebutton {
        width: 300px;
        height: 100px;
        margin: 0 auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: none;
        border-radius: 50px;
    }

    .homebutton a {
        text-decoration: none;
    }

    .homebutton a p {
        color: bisque;
        font-size: 50px;
    }
</style>
